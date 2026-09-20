import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk8q7na1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xk8q7na1n"/>`,
		"fallback": "streamline-sharp:ai-edit-robot-remix",
	});
}

export default Component;
