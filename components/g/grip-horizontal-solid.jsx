import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti463us-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti463us-c"/>`,
		"fallback": "mynaui:grip-horizontal-solid",
	});
}

export default Component;
