import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h1k6ax5lh.css';
import '../../css/v/v65wkxheu.css';
import '../../css/h/h8pzlv1bf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h1k6ax5lh"/><path clip-rule="evenodd" class="v65wkxheu"/><path class="h8pzlv1bf"/></g>`,
		"fallback": "reicon:credit-card-off",
	});
}

export default Component;
