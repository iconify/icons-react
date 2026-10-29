import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/idspebb5q.css';
import '../../css/j/jskgm-bdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="idspebb5q"/><path class="jskgm-bdv wm-a"/></g>`,
		"fallback": "withicons:helicopter-solid",
	});
}

export default Component;
