import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebfq4u1aj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebfq4u1aj"/>`,
		"fallback": "thesvg:1password",
	});
}

export default Component;
