import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ie8qbe_mi.css';
import '../../css/w/w5andtbxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ie8qbe_mi"/><path class="w5andtbxq"/></g>`,
		"fallback": "reicon:fast-forward-duotone",
	});
}

export default Component;
