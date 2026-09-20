import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b5nfu1biq.css';
import '../../css/t/th9er24iy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="b5nfu1biq"/><path class="th9er24iy"/></g>`,
		"fallback": "streamline-flex-color:cube-flat",
	});
}

export default Component;
