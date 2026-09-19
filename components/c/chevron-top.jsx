import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt0_y9e1e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt0_y9e1e"/>`,
		"fallback": "bytesize:chevron-top",
	});
}

export default Component;
