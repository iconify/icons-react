import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyjlmrb5i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyjlmrb5i"/>`,
		"fallback": "garden:headset-sparkle-stroke-16",
	});
}

export default Component;
