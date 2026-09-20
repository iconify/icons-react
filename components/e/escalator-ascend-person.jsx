import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/w6ex2fbir.css';
import '../../css/s/s0y90xbpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="w6ex2fbir"/><path class="s0y90xbpw"/></g>`,
		"fallback": "streamline-freehand:escalator-ascend-person",
	});
}

export default Component;
