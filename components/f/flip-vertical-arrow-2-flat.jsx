import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/us921lb6q.css';
import '../../css/y/yariwubak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="us921lb6q"/><path class="yariwubak"/></g>`,
		"fallback": "streamline-sharp-color:flip-vertical-arrow-2-flat",
	});
}

export default Component;
