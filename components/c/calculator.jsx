import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z8o0q8tuy.css';
import '../../css/k/kqvm8rt-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="z8o0q8tuy"/><path class="kqvm8rt-s"/></g>`,
		"fallback": "iconoir:calculator",
	});
}

export default Component;
