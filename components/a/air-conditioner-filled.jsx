import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojk8-p4ac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojk8-p4ac"/>`,
		"fallback": "boxicons:air-conditioner-filled",
	});
}

export default Component;
