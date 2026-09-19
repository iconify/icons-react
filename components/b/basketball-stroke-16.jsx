import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yi7vgif3a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yi7vgif3a"/>`,
		"fallback": "garden:basketball-stroke-16",
	});
}

export default Component;
