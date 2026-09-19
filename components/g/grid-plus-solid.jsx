import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmxkzsb3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cmxkzsb3n"/>`,
		"fallback": "flowbite:grid-plus-solid",
	});
}

export default Component;
