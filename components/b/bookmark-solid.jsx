import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc-bajzvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gc-bajzvh"/>`,
		"fallback": "mynaui:bookmark-solid",
	});
}

export default Component;
