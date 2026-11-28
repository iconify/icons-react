import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dytsri-lp.css';
import '../../css/p/pok-skbxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="dytsri-lp"/><path class="pok-skbxv"/></g>`,
		"fallback": "iconaut:columns",
	});
}

export default Component;
