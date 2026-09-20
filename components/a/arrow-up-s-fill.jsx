import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c885x9kbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c885x9kbd"/>`,
		"fallback": "ri:arrow-up-s-fill",
	});
}

export default Component;
