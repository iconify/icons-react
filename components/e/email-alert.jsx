import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idkmaqb_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="idkmaqb_n"/>`,
		"fallback": "griddy-icons:email-alert",
	});
}

export default Component;
