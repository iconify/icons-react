import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/pvvsmq5js.css';
import '../../css/w/w45bmjf9x.css';
import '../../css/t/tr7slkc1n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="pvvsmq5js"/><path class="w45bmjf9x"/><path class="tr7slkc1n"/></g>`,
		"fallback": "catppuccin:folder-devcontainer-open",
	});
}

export default Component;
