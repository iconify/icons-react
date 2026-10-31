import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g6o6dkstb.css';
import '../../css/n/n8g7nf3gn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="g6o6dkstb wm-k"/><path class="n8g7nf3gn wm-k"/></g>`,
		"fallback": "withicons:avatar-older-man-gloss",
	});
}

export default Component;
