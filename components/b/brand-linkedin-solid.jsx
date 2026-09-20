import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_r_hmbbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_r_hmbbd"/>`,
		"fallback": "mynaui:brand-linkedin-solid",
	});
}

export default Component;
