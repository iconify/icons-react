import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y97c1n2sq.css';
import '../../css/w/wv-m3qboa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y97c1n2sq"/><path clip-rule="evenodd" class="wv-m3qboa"/></g>`,
		"fallback": "reicon:alarm-minus",
	});
}

export default Component;
