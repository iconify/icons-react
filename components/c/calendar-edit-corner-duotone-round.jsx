import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/txmbuqbsq.css';
import '../../css/m/mexb97g3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="txmbuqbsq"/><path class="mexb97g3p"/></g>`,
		"fallback": "coolicons:calendar-edit-corner-duotone-round",
	});
}

export default Component;
