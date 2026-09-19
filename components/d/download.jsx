import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7pcs3b4t.css';

const viewBox = {"width":304,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7pcs3b4t"/>`,
		"fallback": "zmdi:download",
	});
}

export default Component;
