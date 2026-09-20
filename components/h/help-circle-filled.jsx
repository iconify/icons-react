import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qul541b4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qul541b4q"/>`,
		"fallback": "reicon:help-circle-filled",
	});
}

export default Component;
