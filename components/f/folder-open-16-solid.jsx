import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6vko2bzb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6vko2bzb"/>`,
		"fallback": "heroicons:folder-open-16-solid",
	});
}

export default Component;
