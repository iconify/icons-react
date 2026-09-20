import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gtdey150c.css';
import '../../css/y/y0ezvdb8k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="gtdey150c"/><path class="y0ezvdb8k"/></g>`,
		"fallback": "streamline-color:arrow-crossover-left-flat",
	});
}

export default Component;
