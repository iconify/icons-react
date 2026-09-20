import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3f894b8h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3f894b8h"/>`,
		"fallback": "roentgen:defibrillator",
	});
}

export default Component;
