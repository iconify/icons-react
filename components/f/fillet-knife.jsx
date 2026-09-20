import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj6099xta.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj6099xta"/>`,
		"fallback": "pinhead:fillet-knife",
	});
}

export default Component;
