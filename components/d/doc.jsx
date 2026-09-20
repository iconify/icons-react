import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_-ow0b3x.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_-ow0b3x"/>`,
		"fallback": "simple-line-icons:doc",
	});
}

export default Component;
