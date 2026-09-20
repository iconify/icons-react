import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oymhbubdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oymhbubdv"/>`,
		"fallback": "ri:delete-back-line",
	});
}

export default Component;
