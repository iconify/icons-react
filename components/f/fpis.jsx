import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx4e6vbok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sx4e6vbok"/>`,
		"fallback": "token:fpis",
	});
}

export default Component;
