import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wi4botugc.css';
import '../../css/y/yhqww3beu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wi4botugc"/><path class="yhqww3beu"/></g>`,
		"fallback": "streamline-flex-color:balloon-flat",
	});
}

export default Component;
