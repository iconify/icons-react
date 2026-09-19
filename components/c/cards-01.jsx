import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/ez3g9wb-c.css';
import '../../css/c/ciumeibhn.css';
import '../../css/u/u5m8n7-ni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ez3g9wb-c"/><path class="ciumeibhn"/><path class="u5m8n7-ni"/></g>`,
		"fallback": "hugeicons:cards-01",
	});
}

export default Component;
