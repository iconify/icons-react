import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyy1jn0kz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyy1jn0kz"/>`,
		"fallback": "hugeicons:call-minus",
	});
}

export default Component;
