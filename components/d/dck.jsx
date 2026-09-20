import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sl5fu-xjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sl5fu-xjd"/>`,
		"fallback": "token:dck",
	});
}

export default Component;
