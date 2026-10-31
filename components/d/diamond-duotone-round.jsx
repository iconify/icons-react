import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ftqfbqbex.css';
import '../../css/v/v6hp35bpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ftqfbqbex"/><path class="v6hp35bpl"/></g>`,
		"fallback": "coolicons:diamond-duotone-round",
	});
}

export default Component;
