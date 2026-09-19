import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpt2b0b1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpt2b0b1z"/>`,
		"fallback": "flowbite:heart-solid",
	});
}

export default Component;
