import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jdei3kbqy.css';
import '../../css/c/cmsy4r7px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="jdei3kbqy wm-k"/><path class="cmsy4r7px wm-a"/></g>`,
		"fallback": "withicons:binary-gloss",
	});
}

export default Component;
