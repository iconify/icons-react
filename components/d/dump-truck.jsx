import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hmt31wfuj.css';
import '../../css/l/l2zme6t-z.css';
import '../../css/u/u8lz7gbwk.css';
import '../../css/p/py7ktqbvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)" class="hmt31wfuj"><path class="l2zme6t-z"/><path class="u8lz7gbwk"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "hugeicons:dump-truck",
	});
}

export default Component;
