import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y5ulnvbqs.css';
import '../../css/w/w1c8--b9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="y5ulnvbqs"/><path class="w1c8--b9o"/></g>`,
		"fallback": "streamline-freehand-color:cell-formating-border-horizontal-vertical",
	});
}

export default Component;
