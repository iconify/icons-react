import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9xc2yv0o.css';

const viewBox = {"width":432,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9xc2yv0o"/>`,
		"fallback": "ps:book-tag",
	});
}

export default Component;
