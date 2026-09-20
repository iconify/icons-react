import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kii07kbwu.css';
import '../../css/k/kp7cty-ty.css';
import '../../css/n/n37rihgur.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kii07kbwu"/><path clip-rule="evenodd" class="kp7cty-ty"/><path class="n37rihgur"/></g>`,
		"fallback": "streamline-color:download-box-1-flat",
	});
}

export default Component;
