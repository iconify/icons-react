import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fel8qbbbo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fel8qbbbo"/>`,
		"fallback": "dashicons:image-flip-horizontal",
	});
}

export default Component;
