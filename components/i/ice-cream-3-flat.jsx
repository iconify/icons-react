import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/oqh239o-v.css';
import '../../css/z/za1zyl-1b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="oqh239o-v"/><path class="za1zyl-1b"/></g>`,
		"fallback": "streamline-color:ice-cream-3-flat",
	});
}

export default Component;
