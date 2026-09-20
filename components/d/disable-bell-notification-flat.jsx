import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bwtubqpqg.css';
import '../../css/f/f4f8ttupl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bwtubqpqg"/><path class="f4f8ttupl"/></g>`,
		"fallback": "streamline-color:disable-bell-notification-flat",
	});
}

export default Component;
