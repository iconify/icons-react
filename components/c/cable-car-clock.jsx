import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cs7ot4bcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cs7ot4bcl"/>`,
		"fallback": "noviair:cable-car-clock",
	});
}

export default Component;
