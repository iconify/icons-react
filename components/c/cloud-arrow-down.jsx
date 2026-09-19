import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqtuzr9cv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqtuzr9cv"/>`,
		"fallback": "heroicons-outline:cloud-arrow-down",
	});
}

export default Component;
