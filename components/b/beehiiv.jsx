import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi7yq_h3v.css';

const viewBox = {"width":1544,"height":1456};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi7yq_h3v"/>`,
		"fallback": "thesvg-color:beehiiv",
	});
}

export default Component;
