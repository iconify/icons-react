import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/ran_brb-p.css';
import '../../css/w/wjc69196i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ran_brb-p"/><path class="wjc69196i"/></g>`,
		"fallback": "streamline-color:definition-search-book-flat",
	});
}

export default Component;
