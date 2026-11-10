import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cd6l3mgky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cd6l3mgky"/>`,
		"fallback": "sidekickicons:camera-slash-solid",
	});
}

export default Component;
