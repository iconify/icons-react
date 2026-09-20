import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh7-72bhh.css';
import '../../css/i/icrq7lbxj.css';
import '../../css/o/opr3h4blh.css';
import '../../css/b/b_ge85bsm.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eh7-72bhh"/><path class="icrq7lbxj"/><path class="opr3h4blh"/><path class="b_ge85bsm"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:asexual",
	});
}

export default Component;
