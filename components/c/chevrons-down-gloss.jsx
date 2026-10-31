import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cq3vtt6gx.css';
import '../../css/t/t_9u83buc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="cq3vtt6gx wm-k"/><path class="t_9u83buc wm-a"/></g>`,
		"fallback": "withicons:chevrons-down-gloss",
	});
}

export default Component;
