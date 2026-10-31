import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/tga5xnllz.css';
import '../../css/z/zc3qjjxiv.css';
import '../../css/s/s39pugjmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="tga5xnllz"/><path class="zc3qjjxiv"/><path class="s39pugjmf wm-s"/></g>`,
		"fallback": "withicons-retro:champagne-toast",
	});
}

export default Component;
