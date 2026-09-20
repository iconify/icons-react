import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wnljm8dud.css';
import '../../css/e/e2i1kdo9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wnljm8dud"/><path class="e2i1kdo9o"/></g>`,
		"fallback": "streamline-sharp-color:electric-cord-3-flat",
	});
}

export default Component;
