import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dqf7tw-_j.css';
import '../../css/n/nn5-jrewn.css';
import '../../css/p/py7ktqbvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGXv8lpc2Y)"><path fill="url(#SVG9tzNceiv)" clip-rule="evenodd" class="dqf7tw-_j"/></g><defs><linearGradient id="SVG9tzNceiv" x1="12" x2="12" y1="23.907" y2=".517" gradientUnits="userSpaceOnUse"><stop class="nn5-jrewn"/><stop offset="1" class="nn5-jrewn"/></linearGradient><clipPath id="SVGXv8lpc2Y"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "grommet-icons:apple-music",
	});
}

export default Component;
