import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iwk--5mih.css';
import '../../css/v/vih38-wxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iwk--5mih"/><path clip-rule="evenodd" class="vih38-wxj"/></g>`,
		"fallback": "flowbite:cheese-solid",
	});
}

export default Component;
