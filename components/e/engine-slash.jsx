import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/liypecb8n.css';
import '../../css/i/inawvkb3j.css';
import '../../css/p/pmgxj2bto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="liypecb8n"/><path class="inawvkb3j"/><path class="pmgxj2bto"/></g>`,
		"fallback": "hugeicons:engine-slash",
	});
}

export default Component;
