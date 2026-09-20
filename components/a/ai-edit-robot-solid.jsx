import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysn8ry8zd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ysn8ry8zd"/>`,
		"fallback": "streamline-sharp:ai-edit-robot-solid",
	});
}

export default Component;
