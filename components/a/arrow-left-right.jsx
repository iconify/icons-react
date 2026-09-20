import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_6o5-b7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_6o5-b7j"/>`,
		"fallback": "mynaui:arrow-left-right",
	});
}

export default Component;
