import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y14p00b7r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y14p00b7r"/>`,
		"fallback": "bi:envelope-paper-fill",
	});
}

export default Component;
