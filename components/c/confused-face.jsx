import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfn4zobhp.css';
import '../../css/h/huuajhmrh.css';
import '../../css/o/ojl2heb3e.css';
import '../../css/t/tdhzq11dq.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfn4zobhp"/><circle class="huuajhmrh"/><path class="ojl2heb3e"/><path class="tdhzq11dq"/>`,
		"fallback": "openmoji:confused-face",
	});
}

export default Component;
