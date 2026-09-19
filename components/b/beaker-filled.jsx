import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi_7mx36a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b pi_7mx36a"/>`,
		"fallback": "boxicons:beaker-filled",
	});
}

export default Component;
