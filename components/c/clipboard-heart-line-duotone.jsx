import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zkn3xyt6c.css';
import '../../css/m/m390b8qby.css';
import '../../css/p/phi7aibzw.css';
import '../../css/a/aui1_r5dv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zkn3xyt6c"/><path class="m390b8qby"/><path class="phi7aibzw"/><path class="aui1_r5dv"/></g>`,
		"fallback": "solar:clipboard-heart-line-duotone",
	});
}

export default Component;
