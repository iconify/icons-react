import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/gp8i3-bir.css';
import '../../css/f/fhacfpcwp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="gp8i3-bir"/><path class="fhacfpcwp"/></g>`,
		"fallback": "catppuccin:darklua",
	});
}

export default Component;
