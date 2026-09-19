import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eiw5a_xxt.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eiw5a_xxt"/>`,
		"fallback": "fa7-brands:goodreads-g",
	});
}

export default Component;
