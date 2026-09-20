import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oiozi-bue.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oiozi-bue"/>`,
		"fallback": "pinhead:cairn-and-two-tall-rectangles-top-right",
	});
}

export default Component;
