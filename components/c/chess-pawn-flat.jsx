import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/ix8u7zb0r.css';
import '../../css/m/mo_kqcbvm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ix8u7zb0r"/><path class="mo_kqcbvm"/></g>`,
		"fallback": "streamline-color:chess-pawn-flat",
	});
}

export default Component;
