import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/vj-in0b-p.css';
import '../../css/c/coe0fwbkg.css';
import '../../css/s/slyhgd-ej.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="vj-in0b-p"/><path class="coe0fwbkg"/><path class="slyhgd-ej"/></g>`,
		"fallback": "catppuccin:folder-renovate",
	});
}

export default Component;
