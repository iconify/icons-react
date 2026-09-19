import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8z9m34ix.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8z9m34ix"/>`,
		"fallback": "bi:dash-circle-dotted",
	});
}

export default Component;
