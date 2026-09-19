import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls6_xn_4i.css';
import '../../css/w/w03w98eed.css';
import '../../css/q/qizstxbea.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ls6_xn_4i"><path class="w03w98eed"/><path class="qizstxbea"/></g>`,
		"fallback": "catppuccin:binary",
	});
}

export default Component;
