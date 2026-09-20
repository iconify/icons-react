import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owbur9o1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owbur9o1b"/>`,
		"fallback": "token:el",
	});
}

export default Component;
