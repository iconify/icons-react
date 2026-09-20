import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/h0eqbkbhb.css';
import '../../css/s/s-3hk0-1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="h0eqbkbhb"/><path class="s-3hk0-1j"/></g>`,
		"fallback": "keyline-icons:case-upper-sharp-two-tone",
	});
}

export default Component;
