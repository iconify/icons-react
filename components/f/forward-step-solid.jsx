import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r47p-dk1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r47p-dk1v"/>`,
		"fallback": "flowbite:forward-step-solid",
	});
}

export default Component;
