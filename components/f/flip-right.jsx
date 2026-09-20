import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xjisqebza.css';
import '../../css/o/op505ac1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xjisqebza"/><path class="op505ac1u"/></g>`,
		"fallback": "streamline-freehand-color:flip-right",
	});
}

export default Component;
