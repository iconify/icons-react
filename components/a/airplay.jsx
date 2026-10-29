import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w62x13bmw.css';
import '../../css/r/rsai_abhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="w62x13bmw"/><path class="rsai_abhp wm-a"/></g>`,
		"fallback": "withicons:airplay",
	});
}

export default Component;
