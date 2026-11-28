import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufe5gzu4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufe5gzu4e"/>`,
		"fallback": "iconaut:hot-air-balloon-solid",
	});
}

export default Component;
