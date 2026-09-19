import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/d/d3jp07bla.css';
import '../../css/f/fnlvv-bya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="d3jp07bla"/><path class="fnlvv-bya"/></g>`,
		"fallback": "bitcoin-icons:brush-outline",
	});
}

export default Component;
