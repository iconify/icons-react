import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f9in4npkk.css';
import '../../css/v/v__wmtb9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="f9in4npkk"/><path class="v__wmtb9s wm-a"/></g>`,
		"fallback": "withicons:folder-tree-solid",
	});
}

export default Component;
