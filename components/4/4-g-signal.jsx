import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhog2ktav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhog2ktav"/>`,
		"fallback": "hugeicons:4-g-signal",
	});
}

export default Component;
