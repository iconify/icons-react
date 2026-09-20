import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qejalnb7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qejalnb7o"/>`,
		"fallback": "mynaui:heading-one-solid",
	});
}

export default Component;
