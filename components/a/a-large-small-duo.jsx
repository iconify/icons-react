import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zwj2sdbfr.css';
import '../../css/k/k2yuuu5ll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="zwj2sdbfr"/><path class="k2yuuu5ll"/></g>`,
		"fallback": "iconaut:a-large-small-duo",
	});
}

export default Component;
