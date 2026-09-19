import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pln-rdb9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pln-rdb9f"/>`,
		"fallback": "flowbite:face-grin-outline",
	});
}

export default Component;
