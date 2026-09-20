import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ei0prijnf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ei0prijnf"/>`,
		"fallback": "streamline-flex-color:filter-2-flat",
	});
}

export default Component;
