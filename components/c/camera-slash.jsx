import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oa1e3obbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oa1e3obbz"/>`,
		"fallback": "mynaui:camera-slash",
	});
}

export default Component;
