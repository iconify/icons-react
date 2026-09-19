import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-fpwoyhz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-fpwoyhz"/>`,
		"fallback": "bi:dice-6-fill",
	});
}

export default Component;
