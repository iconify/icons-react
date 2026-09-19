import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0xubof5q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0xubof5q"/>`,
		"fallback": "bi:heart-arrow",
	});
}

export default Component;
