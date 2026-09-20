import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/rmoj74yqa.css';
import '../../css/t/tk2l8hb_e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="rmoj74yqa"/><path class="tk2l8hb_e"/></g>`,
		"fallback": "streamline:creative-commons",
	});
}

export default Component;
