import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv09q5bgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv09q5bgy"/>`,
		"fallback": "simple-icons:airserbia",
	});
}

export default Component;
