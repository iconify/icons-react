import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lyovy8bol.css';
import '../../css/w/wrimk7_3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lyovy8bol"/><path clip-rule="evenodd" class="wrimk7_3f"/></g>`,
		"fallback": "reicon:home-x",
	});
}

export default Component;
