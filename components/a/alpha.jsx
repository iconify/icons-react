import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2ru7lcwo.css';
import '../../css/c/cuyn6tgcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGgxWCtbkt" class="g2ru7lcwo"/></defs><g class="cuyn6tgcc"><use href="#SVGgxWCtbkt"/><use href="#SVGgxWCtbkt"/></g>`,
		"fallback": "griddy-icons:alpha",
	});
}

export default Component;
