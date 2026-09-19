import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyx1o4bkk.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyx1o4bkk"/>`,
		"fallback": "fa7-brands:gitlab-square",
	});
}

export default Component;
