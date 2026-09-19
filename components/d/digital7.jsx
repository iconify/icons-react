import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/driipnrrk.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="driipnrrk"/>`,
		"fallback": "fad:digital7",
	});
}

export default Component;
