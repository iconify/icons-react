import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vutnax8kp.css';
import '../../css/d/d44221bxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vutnax8kp"/><path class="d44221bxx"/></g>`,
		"fallback": "streamline-sharp-color:flip-vertical-square-1-flat",
	});
}

export default Component;
