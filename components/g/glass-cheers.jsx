import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-5jgsb5y.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-5jgsb5y"/>`,
		"fallback": "fa7-solid:glass-cheers",
	});
}

export default Component;
