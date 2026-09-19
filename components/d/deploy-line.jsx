import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6b1i7-3i.css';
import '../../css/o/ob8te9boe.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 k6b1i7-3i"/><path class="clr-i-outline clr-i-outline-path-2 ob8te9boe"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:deploy-line",
	});
}

export default Component;
