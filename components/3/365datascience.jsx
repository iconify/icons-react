import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t05e9cc4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t05e9cc4u"/>`,
		"fallback": "simple-icons:365datascience",
	});
}

export default Component;
