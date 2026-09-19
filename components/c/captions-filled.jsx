import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvf9oixuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvf9oixuc"/>`,
		"fallback": "boxicons:captions-filled",
	});
}

export default Component;
