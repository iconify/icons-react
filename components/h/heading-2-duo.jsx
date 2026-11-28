import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f35__4buh.css';
import '../../css/g/ggik-pwnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="f35__4buh"/><path class="ggik-pwnc"/></g>`,
		"fallback": "iconaut:heading-2-duo",
	});
}

export default Component;
