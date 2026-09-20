import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/el2x1vnwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="el2x1vnwo"/>`,
		"fallback": "uil:cloud-computing",
	});
}

export default Component;
