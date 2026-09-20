import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yb3v348ji.css';
import '../../css/f/fnucklj2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yb3v348ji"/><path class="fnucklj2k"/></g>`,
		"fallback": "lets-icons:critical-duotone",
	});
}

export default Component;
