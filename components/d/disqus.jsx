import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjn9m-sfv.css';

const viewBox = {"width":432,"height":416};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjn9m-sfv"/>`,
		"fallback": "zmdi:disqus",
	});
}

export default Component;
