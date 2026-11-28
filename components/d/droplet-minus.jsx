import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/em8kwvu3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="em8kwvu3z"/>`,
		"fallback": "noviair:droplet-minus",
	});
}

export default Component;
