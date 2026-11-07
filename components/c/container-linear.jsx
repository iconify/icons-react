import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/exs1mfijk.css';
import '../../css/t/t0jnu4rru.css';
import '../../css/v/vz1aq80mm.css';
import '../../css/x/xs-34tbup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="exs1mfijk"/><path class="t0jnu4rru"/><path class="vz1aq80mm"/><path class="xs-34tbup"/></g>`,
		"fallback": "solar:container-linear",
	});
}

export default Component;
