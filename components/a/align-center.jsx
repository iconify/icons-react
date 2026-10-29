import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/teqyn2b0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="teqyn2b0i"/>`,
		"fallback": "withicons:align-center",
	});
}

export default Component;
