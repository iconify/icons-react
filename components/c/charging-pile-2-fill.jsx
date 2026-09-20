import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwm9cd21b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwm9cd21b"/>`,
		"fallback": "ri:charging-pile-2-fill",
	});
}

export default Component;
