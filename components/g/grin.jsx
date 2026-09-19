import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rp2f8t22k.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rp2f8t22k"/>`,
		"fallback": "fa-regular:grin",
	});
}

export default Component;
