import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avbi9obof.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avbi9obof"/>`,
		"fallback": "fa6-solid:hand-point-down",
	});
}

export default Component;
