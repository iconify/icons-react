import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hr7wzvgmz.css';
import '../../css/a/auj5r9hxc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hr7wzvgmz"/><path class="auj5r9hxc"/></g>`,
		"fallback": "streamline-flex-color:group-meeting-approval-flat",
	});
}

export default Component;
