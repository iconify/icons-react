import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0scjib0c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0scjib0c"/>`,
		"fallback": "radix-icons:bell",
	});
}

export default Component;
