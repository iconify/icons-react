import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lf9v9teof.css';
import '../../css/s/skxfee1fo.css';
import '../../css/b/bmdiq6b8t.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 lf9v9teof"/><path class="clr-i-outline clr-i-outline-path-2 skxfee1fo"/><path class="bmdiq6b8t clr-i-outline clr-i-outline-path-3"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:backup-line",
	});
}

export default Component;
