import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gln2ec9ta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gln2ec9ta"/>`,
		"fallback": "flowbite:cube-solid",
	});
}

export default Component;
