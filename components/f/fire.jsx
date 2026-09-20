import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xbnw6fpzy.css';
import '../../css/o/o_n61sz5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xbnw6fpzy"/><path class="o_n61sz5p"/></g>`,
		"fallback": "pixelarticons:fire",
	});
}

export default Component;
