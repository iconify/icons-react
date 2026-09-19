import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxjd1ujej.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxjd1ujej"/>`,
		"fallback": "f7:flame",
	});
}

export default Component;
