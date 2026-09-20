import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gy08xob7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gy08xob7x"/>`,
		"fallback": "ri:blaze-fill",
	});
}

export default Component;
