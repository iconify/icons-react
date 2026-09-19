import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lf9v9teof.css';
import '../../css/z/zaydmwbwh.css';
import '../../css/e/e3rj1b1sk.css';
import '../../css/h/hcwajrbun.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 lf9v9teof"/><path class="clr-i-outline clr-i-outline-path-2 zaydmwbwh"/><path class="clr-i-outline clr-i-outline-path-3 e3rj1b1sk"/><path class="clr-i-outline clr-i-outline-path-4 hcwajrbun"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:backup-restore-line",
	});
}

export default Component;
