import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4bl5-b8m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4bl5-b8m"/>`,
		"fallback": "ion:bag-remove",
	});
}

export default Component;
