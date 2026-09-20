import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/d36x4qbbd.css';
import '../../css/t/t6jyclbiy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="d36x4qbbd"/><path class="t6jyclbiy"/></g>`,
		"fallback": "streamline-color:chess-bishop-flat",
	});
}

export default Component;
