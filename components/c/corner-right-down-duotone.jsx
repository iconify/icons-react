import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a21l97byt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a21l97byt"/>`,
		"fallback": "keyline-icons:corner-right-down-duotone",
	});
}

export default Component;
