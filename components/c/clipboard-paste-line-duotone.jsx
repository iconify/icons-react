import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vsdjuskpk.css';
import '../../css/m/m390b8qby.css';
import '../../css/l/luzp3tjwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vsdjuskpk"/><path class="m390b8qby"/><path class="luzp3tjwj"/></g>`,
		"fallback": "solar:clipboard-paste-line-duotone",
	});
}

export default Component;
