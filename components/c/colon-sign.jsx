import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8g9m3umn.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8g9m3umn"/>`,
		"fallback": "fa6-solid:colon-sign",
	});
}

export default Component;
