import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6--woh2h.css';

const viewBox = {"width":416,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6--woh2h"/>`,
		"fallback": "fa-brands:dochub",
	});
}

export default Component;
