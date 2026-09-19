import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zchwa-b-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zchwa-b-c"/>`,
		"fallback": "flowbite:hourglass-solid",
	});
}

export default Component;
