import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-gy4r9ui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-gy4r9ui"/>`,
		"fallback": "flowbite:dots-vertical-solid",
	});
}

export default Component;
