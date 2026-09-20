import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hghmd_b1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hghmd_b1s"/>`,
		"fallback": "ri:arrow-right-fill",
	});
}

export default Component;
