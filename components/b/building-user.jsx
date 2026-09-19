import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykf6ek8cv.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykf6ek8cv"/>`,
		"fallback": "fa6-solid:building-user",
	});
}

export default Component;
