import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk-z4kbmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wk-z4kbmr"/>`,
		"fallback": "flowbite:euro-solid",
	});
}

export default Component;
