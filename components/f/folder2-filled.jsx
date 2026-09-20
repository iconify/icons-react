import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i769s-bxg.css';
import '../../css/l/l2jwipbuo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i769s-bxg"/><path class="l2jwipbuo"/></g>`,
		"fallback": "reicon:folder2-filled",
	});
}

export default Component;
