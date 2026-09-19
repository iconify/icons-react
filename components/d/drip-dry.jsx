import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvcnwacac.css';

const viewBox = {"width":432,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvcnwacac"/>`,
		"fallback": "ps:drip-dry",
	});
}

export default Component;
