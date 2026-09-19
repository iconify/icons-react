import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oiy7b0mbe.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oiy7b0mbe"/>`,
		"fallback": "whh:dreamweaver",
	});
}

export default Component;
