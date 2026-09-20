import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjle34-cf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjle34-cf"/>`,
		"fallback": "keyline-icons:circle-chevrons-right-fill",
	});
}

export default Component;
