import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou6jo2k2s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ou6jo2k2s"/>`,
		"fallback": "bi:alphabet",
	});
}

export default Component;
