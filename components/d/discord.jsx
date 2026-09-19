import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5jxsc5up.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5jxsc5up"/>`,
		"fallback": "fa7-brands:discord",
	});
}

export default Component;
