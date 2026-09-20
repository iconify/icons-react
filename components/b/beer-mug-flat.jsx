import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qb9cc-ojg.css';
import '../../css/i/ig55xhbvb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qb9cc-ojg"/><path class="ig55xhbvb"/></g>`,
		"fallback": "streamline-color:beer-mug-flat",
	});
}

export default Component;
