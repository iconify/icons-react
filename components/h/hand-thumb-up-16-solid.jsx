import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh5w-s1iw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sh5w-s1iw"/>`,
		"fallback": "heroicons:hand-thumb-up-16-solid",
	});
}

export default Component;
