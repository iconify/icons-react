import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i04bx5bgx.css';
import '../../css/w/w88gn2gzc.css';
import '../../css/h/h3388l28h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i04bx5bgx"/><path clip-rule="evenodd" class="w88gn2gzc"/><path class="h3388l28h"/></g>`,
		"fallback": "reicon:clapperboard-text-filled",
	});
}

export default Component;
