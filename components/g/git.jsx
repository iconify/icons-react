import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/s/s_qnxq2qs.css';
import '../../css/h/hl9kmhwaw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="s_qnxq2qs"/><path class="hl9kmhwaw"/></g>`,
		"fallback": "catppuccin:git",
	});
}

export default Component;
