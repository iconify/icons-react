import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/ss2z3lbta.css';
import '../../css/g/g39mf312c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ss2z3lbta"/><path class="g39mf312c"/></g>`,
		"fallback": "streamline-color:add-bell-notification-flat",
	});
}

export default Component;
