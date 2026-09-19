import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j15hgk4xz.css';
import '../../css/b/b-c4o0b-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j15hgk4xz"/><path class="b-c4o0b-i"/></g>`,
		"fallback": "gg:border-bottom",
	});
}

export default Component;
