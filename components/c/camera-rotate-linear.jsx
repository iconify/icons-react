import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c65o4n_2a.css';
import '../../css/b/bwhdkxhii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c65o4n_2a"/><path class="bwhdkxhii"/></g>`,
		"fallback": "solar:camera-rotate-linear",
	});
}

export default Component;
