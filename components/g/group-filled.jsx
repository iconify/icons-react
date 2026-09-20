import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fal574quc.css';
import '../../css/t/tb5ln68hg.css';
import '../../css/p/p33g7ob5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fal574quc"/><path class="tb5ln68hg"/><path class="p33g7ob5g"/></g>`,
		"fallback": "reicon:group-filled",
	});
}

export default Component;
