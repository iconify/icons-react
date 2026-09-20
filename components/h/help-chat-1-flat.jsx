import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tlanqbcic.css';
import '../../css/c/cp-4pvbny.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="tlanqbcic"/><path class="cp-4pvbny"/></g>`,
		"fallback": "streamline-flex-color:help-chat-1-flat",
	});
}

export default Component;
