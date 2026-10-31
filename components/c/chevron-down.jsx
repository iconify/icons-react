import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vc95bzn9u.css';
import '../../css/h/h2uz87ewu.css';
import '../../css/b/bqmpw2bfi.css';
import '../../css/e/eja-jdbms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="vc95bzn9u wm-shadow"/><path class="h2uz87ewu wm-shadow"/><path class="bqmpw2bfi"/><path class="eja-jdbms"/></g>`,
		"fallback": "withicons-brutal:chevron-down",
	});
}

export default Component;
