import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d48fz7ajf.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d48fz7ajf"/>`,
		"fallback": "fa7-solid:hanukiah",
	});
}

export default Component;
