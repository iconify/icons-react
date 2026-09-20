import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7goi0bav.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7goi0bav"/>`,
		"fallback": "subway:hurt-3",
	});
}

export default Component;
