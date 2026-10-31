import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g5cidxbuh.css';
import '../../css/k/khb39fzlq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="g5cidxbuh wm-k"/><path class="khb39fzlq wm-s"/></g>`,
		"fallback": "withicons:file-clock-gloss",
	});
}

export default Component;
