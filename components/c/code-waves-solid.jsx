import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb91mbb-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb91mbb-n"/>`,
		"fallback": "mynaui:code-waves-solid",
	});
}

export default Component;
