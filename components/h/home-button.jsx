import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bx7fwobyf.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/k/kmp12_cmj.css';
import '../../css/c/cnp20ep5v.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bx7fwobyf"/><g class="jn8qy4bru"><path class="kmp12_cmj"/><path class="cnp20ep5v"/></g>`,
		"fallback": "openmoji:home-button",
	});
}

export default Component;
