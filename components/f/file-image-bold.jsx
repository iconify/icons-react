import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i3eru1kha.css';
import '../../css/r/r59hdg7vl.css';
import '../../css/c/c73t34bfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i3eru1kha"/><path class="r59hdg7vl"/><path class="c73t34bfn"/></g>`,
		"fallback": "solar:file-image-bold",
	});
}

export default Component;
