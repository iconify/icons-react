import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7sfqwk7v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7sfqwk7v"/>`,
		"fallback": "bi:flag-fill",
	});
}

export default Component;
