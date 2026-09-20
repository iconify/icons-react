import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wfja72b9c.css';
import '../../css/b/b49p4mpyf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wfja72b9c"/><path clip-rule="evenodd" class="b49p4mpyf"/></g>`,
		"fallback": "streamline-color:blood-bag-donation-flat",
	});
}

export default Component;
