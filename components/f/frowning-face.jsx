import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c479rxbrg.css';
import '../../css/h/huuajhmrh.css';
import '../../css/u/uap4xwgul.css';
import '../../css/t/tdhzq11dq.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c479rxbrg"/><circle class="huuajhmrh"/><path class="uap4xwgul"/><path class="tdhzq11dq"/>`,
		"fallback": "openmoji:frowning-face",
	});
}

export default Component;
