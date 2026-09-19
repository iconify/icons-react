import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/opn8sobao.css';
import '../../css/m/mh006xb8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="opn8sobao"/><path class="mh006xb8p"/></g>`,
		"fallback": "iconoir:augmented-reality",
	});
}

export default Component;
