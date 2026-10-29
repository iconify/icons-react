import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/duyyrjbez.css';
import '../../css/f/f4uooybgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="duyyrjbez"/><path class="f4uooybgd wm-a"/></g>`,
		"fallback": "withicons:euro-duo",
	});
}

export default Component;
