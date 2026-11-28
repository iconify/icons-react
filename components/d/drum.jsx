import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x6bozssri.css';
import '../../css/a/a4xsiqbdv.css';
import '../../css/d/dazia9bvf.css';
import '../../css/c/c0i9h1jsd.css';
import '../../css/n/n_m1e0sdl.css';
import '../../css/a/afwd4fbty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="x6bozssri"/><path class="a4xsiqbdv"/><path class="dazia9bvf"/><path class="c0i9h1jsd"/><path class="n_m1e0sdl"/><path class="afwd4fbty"/></g>`,
		"fallback": "iconaut:drum",
	});
}

export default Component;
