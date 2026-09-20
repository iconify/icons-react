import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6jw2n68b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6jw2n68b"/>`,
		"fallback": "raphael:coffee",
	});
}

export default Component;
