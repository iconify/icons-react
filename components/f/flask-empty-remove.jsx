import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h54lv3j8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h54lv3j8j"/>`,
		"fallback": "mdi:flask-empty-remove",
	});
}

export default Component;
