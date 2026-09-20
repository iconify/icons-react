import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/ru1l4n_eb.css';
import '../../css/h/he9vmk6vx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ru1l4n_eb"/><path class="he9vmk6vx"/></g>`,
		"fallback": "streamline:affordable-and-clean-energy",
	});
}

export default Component;
