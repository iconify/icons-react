import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blvwms0oy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blvwms0oy"/>`,
		"fallback": "withicons:glass-water-gloss",
	});
}

export default Component;
