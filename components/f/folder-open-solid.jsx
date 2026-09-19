import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-8dz_boj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j-8dz_boj"/>`,
		"fallback": "flowbite:folder-open-solid",
	});
}

export default Component;
