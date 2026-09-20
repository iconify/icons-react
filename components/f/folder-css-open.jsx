import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7vy64bnv.css';
import '../../css/q/q_02szb5c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGLuCnNb4Q" class="w7vy64bnv"/></defs><path class="q_02szb5c"/><use href="#SVGLuCnNb4Q"/><use href="#SVGLuCnNb4Q"/>`,
		"fallback": "material-icon-theme:folder-css-open",
	});
}

export default Component;
