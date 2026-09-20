import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm5rk2b2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm5rk2b2y"/>`,
		"fallback": "keyline-icons:clock-8",
	});
}

export default Component;
