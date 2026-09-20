import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlq4g3q-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlq4g3q-z"/>`,
		"fallback": "ri:gamepad-line",
	});
}

export default Component;
