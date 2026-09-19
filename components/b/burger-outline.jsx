import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqew5hb4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqew5hb4l"/>`,
		"fallback": "flowbite:burger-outline",
	});
}

export default Component;
