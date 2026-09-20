import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7mukz4un.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7mukz4un"/>`,
		"fallback": "mage:calendar-cross-fill",
	});
}

export default Component;
