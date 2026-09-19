import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uj9ek9a7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uj9ek9a7k"/>`,
		"fallback": "flowbite:file-search-solid",
	});
}

export default Component;
