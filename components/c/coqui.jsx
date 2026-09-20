import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/al8r1zblm.css';
import '../../css/j/jr56r7c-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="al8r1zblm"/><path class="jr56r7c-u"/></g>`,
		"fallback": "thesvg:coqui",
	});
}

export default Component;
