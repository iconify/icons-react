import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdfpz8bva.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdfpz8bva"/>`,
		"fallback": "whh:bus",
	});
}

export default Component;
