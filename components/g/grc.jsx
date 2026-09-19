import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_i1oy07h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_i1oy07h"/>`,
		"fallback": "cryptocurrency:grc",
	});
}

export default Component;
