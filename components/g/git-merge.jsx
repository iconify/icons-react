import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xipnj_yzl.css';
import '../../css/j/j4ziy0blu.css';
import '../../css/c/ckfoqpbve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xipnj_yzl"/><path class="j4ziy0blu"/><circle class="ckfoqpbve"/></g>`,
		"fallback": "majesticons:git-merge",
	});
}

export default Component;
