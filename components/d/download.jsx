import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psv6wg5ow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psv6wg5ow"/>`,
		"fallback": "iconoir:download",
	});
}

export default Component;
