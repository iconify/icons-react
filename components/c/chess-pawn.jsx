import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zqh6j4b-s.css';
import '../../css/d/d-o67lbcz.css';
import '../../css/x/x8q5aol2t.css';
import '../../css/j/j-o5shb-y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zqh6j4b-s"/><path class="d-o67lbcz"/><path class="x8q5aol2t"/><path class="j-o5shb-y"/></g>`,
		"fallback": "streamline-color:chess-pawn",
	});
}

export default Component;
