import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c1mv66bpl.css';
import '../../css/m/mn704ge9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c1mv66bpl"/><path clip-rule="evenodd" class="mn704ge9u"/></g>`,
		"fallback": "reicon:info-square",
	});
}

export default Component;
