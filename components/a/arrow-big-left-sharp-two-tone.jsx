import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/mm1_odgqq.css';
import '../../css/x/x7-lhqbss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="mm1_odgqq"/><path class="x7-lhqbss"/></g>`,
		"fallback": "keyline-icons:arrow-big-left-sharp-two-tone",
	});
}

export default Component;
