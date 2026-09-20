import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wehajcbrk.css';
import '../../css/v/vc5hk7vwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wehajcbrk"/><path class="vc5hk7vwj"/></g>`,
		"fallback": "streamline-freehand-color:cellular-network-lte",
	});
}

export default Component;
