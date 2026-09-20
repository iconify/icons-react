import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/x---asbnp.css';
import '../../css/k/krrnwbcaq.css';
import '../../css/h/hxtv6eb4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="x---asbnp"/><path class="krrnwbcaq"/><path class="hxtv6eb4e"/></g>`,
		"fallback": "streamline-freehand-color:color-brush-2",
	});
}

export default Component;
