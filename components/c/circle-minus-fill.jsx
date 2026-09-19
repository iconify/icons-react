import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycafcjx8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ycafcjx8m"/>`,
		"fallback": "akar-icons:circle-minus-fill",
	});
}

export default Component;
