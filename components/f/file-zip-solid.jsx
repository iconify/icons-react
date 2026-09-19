import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/op64c1b5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="op64c1b5s"/>`,
		"fallback": "flowbite:file-zip-solid",
	});
}

export default Component;
