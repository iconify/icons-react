import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmzn24bfh.css';
import '../../css/x/x34dybc5a.css';
import '../../css/j/jihb52b5a.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/v/vmpwdzb_y.css';
import '../../css/t/tjhblrbih.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmzn24bfh"/><path class="x34dybc5a"/><path class="jihb52b5a"/><g class="jn8qy4bru"><path class="vmpwdzb_y"/><path class="tjhblrbih"/></g>`,
		"fallback": "openmoji:bowl-with-spoon",
	});
}

export default Component;
