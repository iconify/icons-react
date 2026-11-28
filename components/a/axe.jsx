import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lzpdlf60e.css';
import '../../css/p/pyo_ygb6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lzpdlf60e"/><path class="pyo_ygb6j"/></g>`,
		"fallback": "iconaut:axe",
	});
}

export default Component;
