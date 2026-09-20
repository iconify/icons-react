import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co9nylr9o.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-2.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co9nylr9o"/>`,
		"fallback": "jam:filter-f",
	});
}

export default Component;
