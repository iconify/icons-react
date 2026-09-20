import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwxihp0nr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwxihp0nr"/>`,
		"fallback": "mynaui:cloud-slash-solid",
	});
}

export default Component;
