import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qc9hneb6s.css';
import '../../css/w/wgd642r6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qc9hneb6s"/><path class="wgd642r6q"/></g>`,
		"fallback": "streamline-sharp-color:desktop-chat-flat",
	});
}

export default Component;
