import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mp06uz8ka.css';
import '../../css/c/cz_ntqbfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mp06uz8ka"/><path class="cz_ntqbfa"/></g>`,
		"fallback": "solar:cloud-waterdrop-broken",
	});
}

export default Component;
