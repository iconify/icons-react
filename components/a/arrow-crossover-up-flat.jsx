import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yoebdkt7a.css';
import '../../css/f/fncs8efma.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yoebdkt7a"/><path class="fncs8efma"/></g>`,
		"fallback": "streamline-color:arrow-crossover-up-flat",
	});
}

export default Component;
