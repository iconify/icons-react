import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5rr84b6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5rr84b6j"/>`,
		"fallback": "mynaui:clock-10-solid",
	});
}

export default Component;
