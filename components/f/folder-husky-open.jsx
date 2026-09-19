import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/a/a41wlnb0g.css';
import '../../css/n/nqixr6p6o.css';
import '../../css/f/f55cxtieo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="a41wlnb0g"/><path class="nqixr6p6o"/><path class="f55cxtieo"/></g>`,
		"fallback": "catppuccin:folder-husky-open",
	});
}

export default Component;
