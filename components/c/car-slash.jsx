import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8yc3wc8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8yc3wc8l"/>`,
		"fallback": "uil:car-slash",
	});
}

export default Component;
