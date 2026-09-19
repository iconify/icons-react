import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/t1ck5doud.css';
import '../../css/v/vopsp_5kw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="t1ck5doud"/><path class="vopsp_5kw"/></g>`,
		"fallback": "catppuccin:css3",
	});
}

export default Component;
