import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijbr0i9jy.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijbr0i9jy"/>`,
		"fallback": "garden:duplicate-fill-12",
	});
}

export default Component;
