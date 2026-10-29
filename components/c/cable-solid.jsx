import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j84z6abwo.css';
import '../../css/j/j-wtijbhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="j84z6abwo"/><path class="j-wtijbhi wm-a"/></g>`,
		"fallback": "withicons:cable-solid",
	});
}

export default Component;
