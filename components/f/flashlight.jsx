import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/my-s55blw.css';
import '../../css/h/hd4-2oboc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="my-s55blw"/><path class="hd4-2oboc"/></g>`,
		"fallback": "andrsrxn:flashlight",
	});
}

export default Component;
