import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rprjw-xhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rprjw-xhx"/>`,
		"fallback": "withicons:chevron-right-solid",
	});
}

export default Component;
