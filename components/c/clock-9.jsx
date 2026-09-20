import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibwv3bt8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibwv3bt8d"/>`,
		"fallback": "keyline-icons:clock-9",
	});
}

export default Component;
