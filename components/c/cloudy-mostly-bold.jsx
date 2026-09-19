import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/acpemfbxr.css';
import '../../css/y/yhzx440ae.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="acpemfbxr"/><path class="yhzx440ae"/></g>`,
		"fallback": "glyphs:cloudy-mostly-bold",
	});
}

export default Component;
