import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl7gwrygj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl7gwrygj"/>`,
		"fallback": "simple-icons:dlib",
	});
}

export default Component;
