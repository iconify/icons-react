import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g12y8bcqd.css';
import '../../css/h/hbnn0x-oz.css';
import '../../css/y/ylmzesbkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g12y8bcqd"/><path class="hbnn0x-oz"/><path class="ylmzesbkm"/></g>`,
		"fallback": "reicon:images-filled",
	});
}

export default Component;
