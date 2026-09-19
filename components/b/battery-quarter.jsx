import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jaqxi2e5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jaqxi2e5n"/>`,
		"fallback": "fontisto:battery-quarter",
	});
}

export default Component;
