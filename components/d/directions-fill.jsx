import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/giq_2-l1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="giq_2-l1c"/>`,
		"fallback": "mingcute:directions-fill",
	});
}

export default Component;
