import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfn4zobhp.css';
import '../../css/h/hj02pj7tw.css';
import '../../css/h/huuajhmrh.css';
import '../../css/u/uap4xwgul.css';
import '../../css/f/fm5fbub4o.css';
import '../../css/t/tdhzq11dq.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfn4zobhp"/><path class="hj02pj7tw"/><circle class="huuajhmrh"/><path class="uap4xwgul"/><path class="fm5fbub4o"/><path class="tdhzq11dq"/>`,
		"fallback": "openmoji:crying-face",
	});
}

export default Component;
