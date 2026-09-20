import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xkkjp7ocz.css';
import '../../css/w/wbb3h6b4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xkkjp7ocz"/><path class="wbb3h6b4b"/></g>`,
		"fallback": "streamline-freehand-color:alert-alarm-clock",
	});
}

export default Component;
