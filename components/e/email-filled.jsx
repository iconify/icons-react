import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2cpjjbht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q2cpjjbht"/>`,
		"fallback": "griddy-icons:email-filled",
	});
}

export default Component;
