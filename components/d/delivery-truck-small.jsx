import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-84ape3z.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-84ape3z"/>`,
		"fallback": "dinkie-icons:delivery-truck-small",
	});
}

export default Component;
