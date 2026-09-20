import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nse7k4bjk.css';
import '../../css/v/vlvpelpnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nse7k4bjk"/><path clip-rule="evenodd" class="vlvpelpnb"/></g>`,
		"fallback": "majesticons:image-circle-plus",
	});
}

export default Component;
