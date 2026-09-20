import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zgcba5bww.css';
import '../../css/n/nk1speb3h.css';
import '../../css/f/ffrnjebod.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zgcba5bww"/><path class="nk1speb3h"/><path class="ffrnjebod"/></g>`,
		"fallback": "streamline-flex-color:dictionary-language-book-flat",
	});
}

export default Component;
