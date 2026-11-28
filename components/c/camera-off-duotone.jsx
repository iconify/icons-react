import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/if7ud8bzl.css';
import '../../css/i/iupah7beg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="if7ud8bzl secondary"/><path class="iupah7beg primary"/></g>`,
		"fallback": "iconaut:camera-off-duotone",
	});
}

export default Component;
