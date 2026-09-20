import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udn5eiblo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udn5eiblo"/>`,
		"fallback": "token:acx",
	});
}

export default Component;
