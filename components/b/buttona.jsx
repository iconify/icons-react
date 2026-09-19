import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-gr6gbnn.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-gr6gbnn"/>`,
		"fallback": "whh:buttona",
	});
}

export default Component;
