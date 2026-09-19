import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjuktpz5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjuktpz5s"/>`,
		"fallback": "boxicons:capitalize-filled",
	});
}

export default Component;
