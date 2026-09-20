import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1e2f7tko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r1e2f7tko"/>`,
		"fallback": "token:bora",
	});
}

export default Component;
