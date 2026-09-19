import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l69rg0b1y.css';
import '../../css/f/f6ypmdp8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l69rg0b1y"/><path class="f6ypmdp8s"/>`,
		"fallback": "boxicons:gradient-filled",
	});
}

export default Component;
