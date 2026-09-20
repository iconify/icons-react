import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f2jbpwb_z.css';
import '../../css/y/ya4v2ogmm.css';
import '../../css/m/mxy6aifea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><ellipse class="f2jbpwb_z"/><path class="ya4v2ogmm"/><path class="mxy6aifea"/></g>`,
		"fallback": "solar:golf-line-duotone",
	});
}

export default Component;
