import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnxfqpbmo.css';
import '../../css/r/rv1y__2ie.css';
import '../../css/u/uoqs5ac6i.css';
import '../../css/d/d6-s8fbyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fnxfqpbmo"/><path clip-rule="evenodd" class="rv1y__2ie"/><path class="uoqs5ac6i"/><path class="d6-s8fbyh"/>`,
		"fallback": "token:chain",
	});
}

export default Component;
