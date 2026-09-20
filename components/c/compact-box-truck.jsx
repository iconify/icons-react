import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9w93fb1t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9w93fb1t"/>`,
		"fallback": "pinhead:compact-box-truck",
	});
}

export default Component;
