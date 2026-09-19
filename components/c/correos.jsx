import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4i1bbb1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4i1bbb1h"/>`,
		"fallback": "cbi:correos",
	});
}

export default Component;
