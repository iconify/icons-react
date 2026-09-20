import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m32t7pb9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m32t7pb9u"/>`,
		"fallback": "ri:charging-pile-line",
	});
}

export default Component;
