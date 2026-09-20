import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6jtorw4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w6jtorw4l"/>`,
		"fallback": "stash:chevron-down",
	});
}

export default Component;
