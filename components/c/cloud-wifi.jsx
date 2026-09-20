import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bg3tc4bjf.css';
import '../../css/f/fkphrnfxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="bg3tc4bjf"/><path class="fkphrnfxz"/></g>`,
		"fallback": "streamline-sharp:cloud-wifi",
	});
}

export default Component;
