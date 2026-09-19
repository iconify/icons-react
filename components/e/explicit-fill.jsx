import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blt9k2ogm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blt9k2ogm"/>`,
		"fallback": "bi:explicit-fill",
	});
}

export default Component;
