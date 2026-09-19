import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/owsoeke4s.css';
import '../../css/k/kwuuanxek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="owsoeke4s"/><path clip-rule="evenodd" class="kwuuanxek"/></g>`,
		"fallback": "gg:box",
	});
}

export default Component;
