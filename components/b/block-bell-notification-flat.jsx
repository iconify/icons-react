import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/effjnbfyo.css';
import '../../css/f/fiquzuiom.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="effjnbfyo"/><path class="fiquzuiom"/></g>`,
		"fallback": "streamline-color:block-bell-notification-flat",
	});
}

export default Component;
