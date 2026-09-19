import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz1n53-_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gz1n53-_x"/>`,
		"fallback": "griddy-icons:equal-not",
	});
}

export default Component;
