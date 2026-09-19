import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-zj_7vyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-zj_7vyw"/>`,
		"fallback": "iconoir:droplet",
	});
}

export default Component;
