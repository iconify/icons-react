import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c93y5pb_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c93y5pb_a"/>`,
		"fallback": "mynaui:focus-solid",
	});
}

export default Component;
