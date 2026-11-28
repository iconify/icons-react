import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/goa9dfbtv.css';
import '../../css/u/urex7lgqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="goa9dfbtv"/><path class="urex7lgqu"/></g>`,
		"fallback": "iconaut:arrow-up-duo",
	});
}

export default Component;
