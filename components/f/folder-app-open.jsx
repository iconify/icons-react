import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/pvvsmq5js.css';
import '../../css/q/qn0962bda.css';
import '../../css/q/q8t0avbcn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="pvvsmq5js"/><path class="qn0962bda"/><circle class="q8t0avbcn"/></g>`,
		"fallback": "catppuccin:folder-app-open",
	});
}

export default Component;
