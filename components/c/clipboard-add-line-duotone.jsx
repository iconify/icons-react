import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zkn3xyt6c.css';
import '../../css/m/m390b8qby.css';
import '../../css/i/ie6yhkbvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zkn3xyt6c"/><path class="m390b8qby"/><path class="ie6yhkbvl"/></g>`,
		"fallback": "solar:clipboard-add-line-duotone",
	});
}

export default Component;
