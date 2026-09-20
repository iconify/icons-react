import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyzz2jbxp.css';
import '../../css/s/sh9luzbpl.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/y/y957gubxe.css';
import '../../css/v/vmjs3ab-o.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyzz2jbxp"/><path class="sh9luzbpl"/><g class="jn8qy4bru"><path class="y957gubxe"/><path class="vmjs3ab-o"/></g>`,
		"fallback": "openmoji:fish",
	});
}

export default Component;
