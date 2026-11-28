import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cu4_okbqi.css';
import '../../css/k/kq0redc4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cu4_okbqi secondary"/><path class="kq0redc4n primary"/></g>`,
		"fallback": "iconaut:blocks-duotone",
	});
}

export default Component;
