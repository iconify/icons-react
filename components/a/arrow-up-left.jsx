import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvc0dx3lz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvc0dx3lz"/>`,
		"fallback": "akar-icons:arrow-up-left",
	});
}

export default Component;
