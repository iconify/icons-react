import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulra56alq.css';
import '../../css/w/w03w98eed.css';
import '../../css/z/zx5so0b7e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ulra56alq"><path class="w03w98eed"/><path class="zx5so0b7e"/></g>`,
		"fallback": "catppuccin:alex",
	});
}

export default Component;
