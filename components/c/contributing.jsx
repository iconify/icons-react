import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/pqv1cybpq.css';
import '../../css/f/f_056cc9h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="pqv1cybpq"/><path class="f_056cc9h"/></g>`,
		"fallback": "catppuccin:contributing",
	});
}

export default Component;
