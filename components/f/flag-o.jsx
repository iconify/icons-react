import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w32e8gb_h.css';

const viewBox = {"width":1728,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w32e8gb_h"/>`,
		"fallback": "fa:flag-o",
	});
}

export default Component;
