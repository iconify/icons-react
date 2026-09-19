import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrdy0obbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrdy0obbj"/>`,
		"fallback": "flowbite:command-solid",
	});
}

export default Component;
