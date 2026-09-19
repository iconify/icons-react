import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_wi9y41m.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_wi9y41m"/>`,
		"fallback": "fa6-solid:austral-sign",
	});
}

export default Component;
