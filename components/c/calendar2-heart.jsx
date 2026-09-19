import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te1x5e53b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="te1x5e53b"/>`,
		"fallback": "bi:calendar2-heart",
	});
}

export default Component;
