import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp3-tgj1e.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yp3-tgj1e"/>`,
		"fallback": "fa7-solid:feather",
	});
}

export default Component;
