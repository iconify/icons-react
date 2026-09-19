import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsqv8iz_e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsqv8iz_e"/>`,
		"fallback": "icon-park-outline:arrow-up",
	});
}

export default Component;
