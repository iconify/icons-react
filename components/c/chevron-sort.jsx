import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl71fwblr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl71fwblr"/>`,
		"fallback": "carbon:chevron-sort",
	});
}

export default Component;
