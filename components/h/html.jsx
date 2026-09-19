import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/leekh_blv.css';
import '../../css/c/cj1ltjbyi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="leekh_blv"/><path class="cj1ltjbyi"/></g>`,
		"fallback": "catppuccin:html",
	});
}

export default Component;
