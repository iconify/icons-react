import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7c5ax-1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7c5ax-1i"/>`,
		"fallback": "ri:forward-15-line",
	});
}

export default Component;
