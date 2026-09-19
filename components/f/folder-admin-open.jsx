import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/hskbjfbvp.css';
import '../../css/v/vdfrvccqx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="hskbjfbvp"/><path class="vdfrvccqx"/></g>`,
		"fallback": "catppuccin:folder-admin-open",
	});
}

export default Component;
