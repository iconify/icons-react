import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/ehxz1bc7c.css';
import '../../css/h/hxv8wh_mj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ehxz1bc7c"/><path class="hxv8wh_mj"/></g>`,
		"fallback": "streamline:capitol",
	});
}

export default Component;
