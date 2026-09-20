import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n5czak4is.css';
import '../../css/h/hjbvh5bbk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="n5czak4is"/><path class="hjbvh5bbk"/></g>`,
		"fallback": "streamline-flex-color:archive-box-flat",
	});
}

export default Component;
