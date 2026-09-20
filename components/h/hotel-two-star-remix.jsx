import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/my9zteq1e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="my9zteq1e"/>`,
		"fallback": "streamline:hotel-two-star-remix",
	});
}

export default Component;
