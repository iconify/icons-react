import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_x-m7_yy.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_x-m7_yy"/>`,
		"fallback": "whh:fastright",
	});
}

export default Component;
