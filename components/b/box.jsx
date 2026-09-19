import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb4g-_b1v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pb4g-_b1v"/>`,
		"fallback": "icons8:box",
	});
}

export default Component;
