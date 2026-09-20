import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdw1bnmki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdw1bnmki"/>`,
		"fallback": "mdi:file-text-plus-outline",
	});
}

export default Component;
