import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/brq7bsdvc.css';
import '../../css/w/w07q6db9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="brq7bsdvc wm-k"/><path class="w07q6db9p wm-s"/></g>`,
		"fallback": "withicons:eye-off-solid",
	});
}

export default Component;
