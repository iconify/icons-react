import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6bs4k0fl.css';
import '../../css/y/yb3fr0bwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6bs4k0fl"/><path class="yb3fr0bwr"/>`,
		"fallback": "solar:inbox-bold-duotone",
	});
}

export default Component;
