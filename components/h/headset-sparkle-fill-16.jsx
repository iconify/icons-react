import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v92hlnq7j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v92hlnq7j"/>`,
		"fallback": "garden:headset-sparkle-fill-16",
	});
}

export default Component;
