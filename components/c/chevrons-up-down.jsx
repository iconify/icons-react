import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/dea1ln4ua.css';
import '../../css/t/tmivq76kq.css';
import '../../css/z/z0nui8bre.css';
import '../../css/u/u6rmc7cfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="dea1ln4ua wm-shadow"/><path class="tmivq76kq wm-shadow"/><path class="z0nui8bre"/><path class="u6rmc7cfe"/></g>`,
		"fallback": "withicons-brutal:chevrons-up-down",
	});
}

export default Component;
