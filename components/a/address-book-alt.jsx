import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/andt_0b7s.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="andt_0b7s"/>`,
		"fallback": "el:address-book-alt",
	});
}

export default Component;
