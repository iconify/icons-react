import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/ckmftni9l.css';
import '../../css/f/f08-kub7w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ckmftni9l"/><path class="f08-kub7w"/></g>`,
		"fallback": "streamline-flex-color:give-star-flat",
	});
}

export default Component;
