import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xigu7d-fq.css';
import '../../css/d/dg8dgkb8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="xigu7d-fq"/><path class="dg8dgkb8z"/></g>`,
		"fallback": "iconaut:bold",
	});
}

export default Component;
