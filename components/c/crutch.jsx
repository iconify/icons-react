import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxlvrcbmy.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxlvrcbmy"/>`,
		"fallback": "fa7-solid:crutch",
	});
}

export default Component;
