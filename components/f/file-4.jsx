import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rp5dk7q3z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rp5dk7q3z"/>`,
		"fallback": "subway:file-4",
	});
}

export default Component;
