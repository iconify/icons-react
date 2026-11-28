import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rc7k2r7yx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rc7k2r7yx"/>`,
		"fallback": "noviair:bag-check",
	});
}

export default Component;
