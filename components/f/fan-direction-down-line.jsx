import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/haqr67bmp.css';
import '../../css/z/z3jvyi2th.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="haqr67bmp"/><path class="z3jvyi2th"/>`,
		"fallback": "mingcute:fan-direction-down-line",
	});
}

export default Component;
