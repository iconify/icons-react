import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g7k409bhs.css';
import '../../css/n/nqbip7m1a.css';
import '../../css/h/hbl-7rbdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="g7k409bhs"/><path class="nqbip7m1a"/><path class="hbl-7rbdf"/></g>`,
		"fallback": "hugeicons:hot-tube",
	});
}

export default Component;
