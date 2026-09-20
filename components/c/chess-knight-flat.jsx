import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zgg70wbfy.css';
import '../../css/r/r9om83w0n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zgg70wbfy"/><path class="r9om83w0n"/></g>`,
		"fallback": "streamline-color:chess-knight-flat",
	});
}

export default Component;
