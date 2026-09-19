import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2yqzbbsz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2yqzbbsz"/>`,
		"fallback": "bi:calendar2-heart-fill",
	});
}

export default Component;
