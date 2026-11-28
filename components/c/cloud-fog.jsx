import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/ywgz2xb4b.css';
import '../../css/z/zu3nt_35k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ywgz2xb4b"/><path class="zu3nt_35k"/></g>`,
		"fallback": "iconaut:cloud-fog",
	});
}

export default Component;
