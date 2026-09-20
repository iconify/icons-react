import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jtt8mubfs.css';
import '../../css/o/o7h4q9ylz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jtt8mubfs"/><path class="o7h4q9ylz"/></g>`,
		"fallback": "streamline-color:dice-6-flat",
	});
}

export default Component;
