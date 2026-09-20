import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vzgygcepj.css';
import '../../css/a/ay1qmvbxn.css';
import '../../css/d/dx2-p-qna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vzgygcepj"/><path class="ay1qmvbxn"/><path clip-rule="evenodd" class="dx2-p-qna"/></g>`,
		"fallback": "solar:danger-outline",
	});
}

export default Component;
