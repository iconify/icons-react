import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e0c96qb6a.css';
import '../../css/v/vddq6r-de.css';
import '../../css/f/faouxb3ly.css';
import '../../css/t/ts3tpkwrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e0c96qb6a"/><path class="vddq6r-de"/><path class="faouxb3ly"/><path class="ts3tpkwrk"/></g>`,
		"fallback": "solar:grid-3x3-linear",
	});
}

export default Component;
