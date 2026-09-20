import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yot9f06rc.css';
import '../../css/g/g66xdu2ki.css';
import '../../css/f/f6e04nw5y.css';
import '../../css/h/huuajhmrh.css';
import '../../css/c/czgob2bpy.css';
import '../../css/t/tdhzq11dq.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yot9f06rc"/><path class="g66xdu2ki"/><path class="f6e04nw5y"/><circle class="huuajhmrh"/><path class="czgob2bpy"/><path class="tdhzq11dq"/>`,
		"fallback": "openmoji:grimacing-face",
	});
}

export default Component;
