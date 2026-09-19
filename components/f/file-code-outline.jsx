import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-0fpq8wv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-0fpq8wv"/>`,
		"fallback": "flowbite:file-code-outline",
	});
}

export default Component;
