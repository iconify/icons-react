import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1coxgz9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1coxgz9y"/>`,
		"fallback": "boxicons:cloud-alt-2-filled",
	});
}

export default Component;
