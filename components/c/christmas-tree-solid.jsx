import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tw8iu0b-q.css';
import '../../css/q/q42jlsbwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="tw8iu0b-q"/><path class="q42jlsbwe wm-a"/></g>`,
		"fallback": "withicons:christmas-tree-solid",
	});
}

export default Component;
