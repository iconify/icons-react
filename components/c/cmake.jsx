import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/qiqomoa-e.css';
import '../../css/c/cw5pk9buu.css';
import '../../css/a/am4yric8b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="qiqomoa-e"/><path class="cw5pk9buu"/><path class="am4yric8b"/></g>`,
		"fallback": "catppuccin:cmake",
	});
}

export default Component;
