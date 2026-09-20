import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxzun484g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxzun484g"/>`,
		"fallback": "mdi:garage",
	});
}

export default Component;
