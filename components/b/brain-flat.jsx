import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/e9ddx5ohd.css';
import '../../css/o/obgekrdaq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="e9ddx5ohd"/><path class="obgekrdaq"/></g>`,
		"fallback": "streamline-color:brain-flat",
	});
}

export default Component;
