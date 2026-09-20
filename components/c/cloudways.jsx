import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykfqj8cgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykfqj8cgr"/>`,
		"fallback": "simple-icons:cloudways",
	});
}

export default Component;
