import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt-8uk4il.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt-8uk4il"/>`,
		"fallback": "withicons:command-duo",
	});
}

export default Component;
