import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gi7958byd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gi7958byd"/>`,
		"fallback": "file-icons:api-blueprint",
	});
}

export default Component;
