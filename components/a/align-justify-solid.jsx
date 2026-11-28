import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cif9nhx3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cif9nhx3o"/>`,
		"fallback": "iconaut:align-justify-solid",
	});
}

export default Component;
