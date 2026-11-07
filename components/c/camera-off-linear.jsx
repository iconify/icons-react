import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c65o4n_2a.css';
import '../../css/u/u4qnnrb5s.css';
import '../../css/f/fppjq7biv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c65o4n_2a"/><path class="u4qnnrb5s"/><path class="fppjq7biv"/></g>`,
		"fallback": "solar:camera-off-linear",
	});
}

export default Component;
