import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkb1im0po.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pkb1im0po"/>`,
		"fallback": "flowbite:facebook-solid",
	});
}

export default Component;
