import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zw1rcdg2e.css';
import '../../css/b/bsavs7uau.css';
import '../../css/y/y3vgs4o4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="zw1rcdg2e"/><path class="bsavs7uau"/><path class="y3vgs4o4d"/></g>`,
		"fallback": "withicons-bauhaus:avatar-dino",
	});
}

export default Component;
