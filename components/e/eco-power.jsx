import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iwlacp9qe.css';
import '../../css/f/fnkirbg7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="iwlacp9qe"/><path class="fnkirbg7k"/></g>`,
		"fallback": "hugeicons:eco-power",
	});
}

export default Component;
