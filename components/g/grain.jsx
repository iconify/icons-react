import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3k5vebsn.css';

const viewBox = {"width":344,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3k5vebsn"/>`,
		"fallback": "zmdi:grain",
	});
}

export default Component;
