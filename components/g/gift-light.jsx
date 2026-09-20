import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/p/pj68rbber.css';
import '../../css/p/pz6bhwbna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="pj68rbber"/><path class="pz6bhwbna"/></g>`,
		"fallback": "lets-icons:gift-light",
	});
}

export default Component;
