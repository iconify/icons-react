import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yes8172wz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yes8172wz"/>`,
		"fallback": "lets-icons:done-round",
	});
}

export default Component;
