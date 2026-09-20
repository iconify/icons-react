import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/ed00yu9ta.css';
import '../../css/z/zwdv4hbhm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ed00yu9ta"/><path class="zwdv4hbhm"/></g>`,
		"fallback": "streamline-color:graph-flat",
	});
}

export default Component;
