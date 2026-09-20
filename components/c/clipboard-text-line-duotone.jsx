import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vsdjuskpk.css';
import '../../css/x/x_757hbgu.css';
import '../../css/d/d5t0b286k.css';
import '../../css/m/m390b8qby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vsdjuskpk"/><path class="x_757hbgu"/><path class="d5t0b286k"/><path class="m390b8qby"/></g>`,
		"fallback": "solar:clipboard-text-line-duotone",
	});
}

export default Component;
