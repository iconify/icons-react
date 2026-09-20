import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yian2ibvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yian2ibvk"/>`,
		"fallback": "thesvg-color:futurelearn",
	});
}

export default Component;
