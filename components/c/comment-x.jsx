import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rde13qbvi.css';
import '../../css/j/jvc0x--az.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rde13qbvi"/><path clip-rule="evenodd" class="jvc0x--az"/></g>`,
		"fallback": "reicon:comment-x",
	});
}

export default Component;
