import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pc4b3b0tr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pc4b3b0tr"/>`,
		"fallback": "pinhead:calendar",
	});
}

export default Component;
