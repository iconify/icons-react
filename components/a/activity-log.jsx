import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/viwnlk27h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="viwnlk27h"/>`,
		"fallback": "radix-icons:activity-log",
	});
}

export default Component;
