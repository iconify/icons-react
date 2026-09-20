import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/c/c7pmryb3o.css';
import '../../css/f/f-7yf7b_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="c7pmryb3o"/><path class="f-7yf7b_f"/></g>`,
		"fallback": "lets-icons:favorites-light",
	});
}

export default Component;
