import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/j9-lkwg5w.css';
import '../../css/p/pnmj0hb4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="j9-lkwg5w"/><path class="pnmj0hb4v"/></g>`,
		"fallback": "tdesign:extension",
	});
}

export default Component;
