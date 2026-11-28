import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmimakb1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmimakb1e"/>`,
		"fallback": "iconaut:garage-solid",
	});
}

export default Component;
