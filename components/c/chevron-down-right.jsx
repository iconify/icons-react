import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dua799j_s.css';

const viewBox = {"width":24,"height":24,"left":-7,"top":-7};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dua799j_s"/>`,
		"fallback": "jam:chevron-down-right",
	});
}

export default Component;
