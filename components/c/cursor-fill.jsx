import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bklllhg4u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bklllhg4u"/>`,
		"fallback": "bi:cursor-fill",
	});
}

export default Component;
