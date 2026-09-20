import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/x/xirci526l.css';
import '../../css/t/taosqkbwj.css';
import '../../css/h/hm4yo6blt.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="xirci526l"/><path class="taosqkbwj"/><path class="hm4yo6blt"/></g>`,
		"fallback": "system-uicons:fork-git",
	});
}

export default Component;
