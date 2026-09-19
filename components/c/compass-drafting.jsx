import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6hq7dypt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6hq7dypt"/>`,
		"fallback": "fa6-solid:compass-drafting",
	});
}

export default Component;
