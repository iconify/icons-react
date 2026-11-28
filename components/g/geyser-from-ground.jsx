import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv5vt-b3k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv5vt-b3k"/>`,
		"fallback": "pinhead:geyser-from-ground",
	});
}

export default Component;
