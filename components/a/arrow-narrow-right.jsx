import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so7h_yp_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="so7h_yp_g"/>`,
		"fallback": "heroicons-outline:arrow-narrow-right",
	});
}

export default Component;
