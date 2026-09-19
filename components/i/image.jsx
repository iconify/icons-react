import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/mu2w5_b1y.css';
import '../../css/c/ce6bp3l0b.css';
import '../../css/f/f9wxipb6g.css';
import '../../css/u/u989i_bik.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="mu2w5_b1y"/><path class="ce6bp3l0b"/><path class="f9wxipb6g"/><path class="u989i_bik"/></g>`,
		"fallback": "catppuccin:image",
	});
}

export default Component;
