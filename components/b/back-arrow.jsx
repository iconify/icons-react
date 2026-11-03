import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5-0-5bhi.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/m/mp7-b1b3k.css';
import '../../css/i/ixt7oqbxv.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5-0-5bhi"/><g class="jn8qy4bru"><path class="mp7-b1b3k"/><path class="ixt7oqbxv"/></g>`,
		"fallback": "openmoji:back-arrow",
	});
}

export default Component;
