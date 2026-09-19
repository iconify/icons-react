import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9thckz9t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9thckz9t"/>`,
		"fallback": "fa-regular:closed-captioning",
	});
}

export default Component;
