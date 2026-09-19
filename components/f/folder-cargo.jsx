import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/vj-in0b-p.css';
import '../../css/p/pr-9-l96p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="vj-in0b-p"/><path class="pr-9-l96p"/></g>`,
		"fallback": "catppuccin:folder-cargo",
	});
}

export default Component;
