import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh0fu8bvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wh0fu8bvn"/>`,
		"fallback": "flowbite:code-pull-request-solid",
	});
}

export default Component;
