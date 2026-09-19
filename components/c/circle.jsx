import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5qjvabgu.css';

const viewBox = {"width":717,"height":713};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5qjvabgu"/>`,
		"fallback": "ls:circle",
	});
}

export default Component;
