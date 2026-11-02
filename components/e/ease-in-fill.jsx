import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v15yy0bez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v15yy0bez"/>`,
		"fallback": "mingcute:ease-in-fill",
	});
}

export default Component;
