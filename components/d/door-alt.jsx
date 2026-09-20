import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fa2_mdbyf.css';
import '../../css/j/jcqo197tm.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(4 1)" class="bi12bsetm"><path class="fa2_mdbyf"/><circle class="jcqo197tm"/></g>`,
		"fallback": "system-uicons:door-alt",
	});
}

export default Component;
