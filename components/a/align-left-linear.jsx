import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fvn4_6iaj.css';
import '../../css/v/v8iefbcvz.css';
import '../../css/r/rns374uuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fvn4_6iaj"/><path class="v8iefbcvz"/><path class="rns374uuw"/></g>`,
		"fallback": "solar:align-left-linear",
	});
}

export default Component;
