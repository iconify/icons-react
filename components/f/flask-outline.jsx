import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/av8j44htx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="av8j44htx"/>`,
		"fallback": "mdi:flask-outline",
	});
}

export default Component;
