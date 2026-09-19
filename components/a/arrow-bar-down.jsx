import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vo449e5to.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vo449e5to"/>`,
		"fallback": "bi:arrow-bar-down",
	});
}

export default Component;
