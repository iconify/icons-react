import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9oxuy4yd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9oxuy4yd"/>`,
		"fallback": "mynaui:heading-one",
	});
}

export default Component;
