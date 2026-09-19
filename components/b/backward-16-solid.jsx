import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9ghmjbrb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9ghmjbrb"/>`,
		"fallback": "heroicons:backward-16-solid",
	});
}

export default Component;
