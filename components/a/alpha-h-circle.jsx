import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj1up050d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gj1up050d"/>`,
		"fallback": "mdi:alpha-h-circle",
	});
}

export default Component;
