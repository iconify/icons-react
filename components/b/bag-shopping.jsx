import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu2b1hbwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu2b1hbwt"/>`,
		"fallback": "meteor-icons:bag-shopping",
	});
}

export default Component;
