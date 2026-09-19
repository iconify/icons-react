import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3q8_p7qu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3q8_p7qu"/>`,
		"fallback": "bi:calendar3-fill",
	});
}

export default Component;
