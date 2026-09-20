import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/f7j_tybfk.css';
import '../../css/h/himljfndq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="f7j_tybfk"/><path class="himljfndq"/></g>`,
		"fallback": "streamline-flex-color:delete-tag-flat",
	});
}

export default Component;
