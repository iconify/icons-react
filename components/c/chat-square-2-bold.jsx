import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okcwy630f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="okcwy630f"/>`,
		"fallback": "solar:chat-square-2-bold",
	});
}

export default Component;
