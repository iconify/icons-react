import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a7mgnpb7z.css';
import '../../css/n/nk3w2sk1d.css';
import '../../css/g/g8hv7acos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="a7mgnpb7z"/><path class="nk3w2sk1d"/><path class="g8hv7acos"/></g>`,
		"fallback": "iconaut:coins",
	});
}

export default Component;
