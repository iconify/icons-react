import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q7xdmo1fq.css';
import '../../css/j/jl44fzr1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="q7xdmo1fq"/><path class="jl44fzr1o"/></g>`,
		"fallback": "hugeicons:global-editing",
	});
}

export default Component;
