import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/cys0y0b9y.css';
import '../../css/i/i4xym8b0m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="cys0y0b9y"/><path class="i4xym8b0m"/></g>`,
		"fallback": "catppuccin:folder-fvm-open",
	});
}

export default Component;
