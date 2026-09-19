import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zg62wsbvw.css';
import '../../css/k/klsgw52wh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zg62wsbvw"/><path class="klsgw52wh"/></g>`,
		"fallback": "flowbite:aws-solid",
	});
}

export default Component;
