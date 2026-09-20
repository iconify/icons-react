import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdpwuqk5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdpwuqk5e"/>`,
		"fallback": "streamline-ultimate:fitness-jumping-rope-bold",
	});
}

export default Component;
