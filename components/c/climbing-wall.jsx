import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpe2ewbnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpe2ewbnz"/>`,
		"fallback": "guidance:climbing-wall",
	});
}

export default Component;
