import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zwtu5qb7r.css';
import '../../css/j/jl3lqkwcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zwtu5qb7r"/><path class="jl3lqkwcg"/></g>`,
		"fallback": "reicon:box2-filled",
	});
}

export default Component;
