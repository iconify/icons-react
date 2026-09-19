import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bx2h32bin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bx2h32bin"/>`,
		"fallback": "griddy-icons:framer",
	});
}

export default Component;
