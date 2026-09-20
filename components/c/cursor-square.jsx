import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/oln0c1b7s.css';
import '../../css/a/ai20vsrwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="oln0c1b7s"/><path class="ai20vsrwz"/></g>`,
		"fallback": "reicon:cursor-square",
	});
}

export default Component;
