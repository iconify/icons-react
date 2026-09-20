import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/geuvjabeh.css';
import '../../css/n/n138jbb7f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="geuvjabeh"/><path class="n138jbb7f"/></g>`,
		"fallback": "streamline-color:discount-percent-badge-flat",
	});
}

export default Component;
