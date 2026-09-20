import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqb3xcc4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqb3xcc4m"/>`,
		"fallback": "mdi:format-italic",
	});
}

export default Component;
