import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/o/oerw1zbhw.css';
import '../../css/w/wetd3dbuh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="oerw1zbhw"/><path class="wetd3dbuh"/></g>`,
		"fallback": "catppuccin:commitlint",
	});
}

export default Component;
