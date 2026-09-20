import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8vq4jb0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y8vq4jb0v"/>`,
		"fallback": "streamline-sharp:battery-medium-3-remix",
	});
}

export default Component;
