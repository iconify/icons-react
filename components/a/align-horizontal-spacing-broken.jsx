import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fvn4_6iaj.css';
import '../../css/a/a0ap9gbek.css';
import '../../css/a/a7rwy_bxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fvn4_6iaj"/><path class="a0ap9gbek"/><path class="a7rwy_bxw"/></g>`,
		"fallback": "solar:align-horizontal-spacing-broken",
	});
}

export default Component;
