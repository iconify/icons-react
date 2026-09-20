import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wq0hmuiej.css';
import '../../css/z/znucjgzav.css';
import '../../css/b/bn6w8zb9h.css';
import '../../css/q/qj1hodctu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wq0hmuiej"/><path class="znucjgzav"/><path clip-rule="evenodd" class="bn6w8zb9h"/><path class="qj1hodctu"/></g>`,
		"fallback": "solar:clapperboard-open-play-bold",
	});
}

export default Component;
