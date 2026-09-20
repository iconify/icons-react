import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsuyl5yrs.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsuyl5yrs"/>`,
		"fallback": "radix-icons:double-arrow-left",
	});
}

export default Component;
