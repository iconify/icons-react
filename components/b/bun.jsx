import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/m0yktsbik.css';
import '../../css/k/kldlbd28x.css';
import '../../css/m/mrfogu88k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="m0yktsbik"/><path class="kldlbd28x"/><path class="mrfogu88k"/></g>`,
		"fallback": "catppuccin:bun",
	});
}

export default Component;
