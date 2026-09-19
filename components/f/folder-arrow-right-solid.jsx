import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udqwx6wsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="udqwx6wsd"/>`,
		"fallback": "flowbite:folder-arrow-right-solid",
	});
}

export default Component;
