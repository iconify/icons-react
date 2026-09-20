import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-74kyb-b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-74kyb-b"/>`,
		"fallback": "qlementine-icons:filter-16",
	});
}

export default Component;
