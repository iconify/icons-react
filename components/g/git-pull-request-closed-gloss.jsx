import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tcp4efbwu.css';
import '../../css/l/l2s7eabqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="tcp4efbwu wm-k"/><path class="l2s7eabqo wm-s"/></g>`,
		"fallback": "withicons:git-pull-request-closed-gloss",
	});
}

export default Component;
