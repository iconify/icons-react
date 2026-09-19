import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vtgt2unvj.css';
import '../../css/j/jdcazrb0o.css';
import '../../css/x/xn93meeml.css';
import '../../css/u/uz5fs9kha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vtgt2unvj"/><path class="jdcazrb0o"/><path class="xn93meeml"/><path class="uz5fs9kha"/></g>`,
		"fallback": "flowbite:flowbite-solid",
	});
}

export default Component;
