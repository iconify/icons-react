import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv2w0mb5e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv2w0mb5e"/>`,
		"fallback": "radix-icons:font-size",
	});
}

export default Component;
