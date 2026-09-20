import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wde4g70nu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wde4g70nu"/>`,
		"fallback": "radix-icons:box",
	});
}

export default Component;
