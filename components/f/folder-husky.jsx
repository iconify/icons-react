import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/hfb1keruk.css';
import '../../css/l/lrrken3jl.css';
import '../../css/f/f55cxtieo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="hfb1keruk"/><path class="lrrken3jl"/><path class="f55cxtieo"/></g>`,
		"fallback": "catppuccin:folder-husky",
	});
}

export default Component;
