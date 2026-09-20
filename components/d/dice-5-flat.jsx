import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jtt8mubfs.css';
import '../../css/j/jvzlmdxol.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jtt8mubfs"/><path class="jvzlmdxol"/></g>`,
		"fallback": "streamline-color:dice-5-flat",
	});
}

export default Component;
