import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-k45ob-z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-k45ob-z"/>`,
		"fallback": "raphael:apple",
	});
}

export default Component;
