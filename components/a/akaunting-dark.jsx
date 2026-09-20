import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h48013zuy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h48013zuy"/>`,
		"fallback": "selfhst:akaunting-dark",
	});
}

export default Component;
