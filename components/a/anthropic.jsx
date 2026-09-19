import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lexjn9bdf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lexjn9bdf"/>`,
		"fallback": "bi:anthropic",
	});
}

export default Component;
