import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/muhulxb5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="muhulxb5x"/>`,
		"fallback": "mynaui:clock-9-solid",
	});
}

export default Component;
