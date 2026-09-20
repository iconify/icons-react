import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc26d0b8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc26d0b8a"/>`,
		"fallback": "mynaui:daze-square-solid",
	});
}

export default Component;
