import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vevfxlbps.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vevfxlbps"/>`,
		"fallback": "radix-icons:half-1",
	});
}

export default Component;
