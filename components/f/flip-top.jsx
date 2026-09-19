import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/enm-gqbsg.css';
import '../../css/e/eawxp5b_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="enm-gqbsg"/><path class="eawxp5b_a"/></g>`,
		"fallback": "hugeicons:flip-top",
	});
}

export default Component;
