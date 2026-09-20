import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iadd8ybpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iadd8ybpx"/>`,
		"fallback": "mynaui:arrow-right-waves-solid",
	});
}

export default Component;
