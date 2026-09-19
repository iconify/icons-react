import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wjjmiygmi.css';
import '../../css/f/fr4qsobgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wjjmiygmi"/><path class="fr4qsobgj"/></g>`,
		"fallback": "hugeicons:eco-energy",
	});
}

export default Component;
