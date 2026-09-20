import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vz9n0xw9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vz9n0xw9w"/>`,
		"fallback": "mynaui:folder-two-solid",
	});
}

export default Component;
