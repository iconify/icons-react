import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/br7nqpp0r.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="br7nqpp0r"/>`,
		"fallback": "pinhead:cairn-and-three-tall-rectangles-up",
	});
}

export default Component;
