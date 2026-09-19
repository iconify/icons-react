import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef3ym8b9k.css';

const viewBox = {"width":472,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef3ym8b9k"/>`,
		"fallback": "zmdi:group",
	});
}

export default Component;
