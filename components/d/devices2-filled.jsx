import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtmswccww.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rjmt1lb2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGRHCYbejF" class="mtmswccww"/></defs><g class="cuyn6tgcc"><path class="rjmt1lb2s"/><use href="#SVGRHCYbejF"/><use href="#SVGRHCYbejF"/></g>`,
		"fallback": "reicon:devices2-filled",
	});
}

export default Component;
