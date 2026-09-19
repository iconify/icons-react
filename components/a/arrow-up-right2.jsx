import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_6j5db4k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_6j5db4k"/>`,
		"fallback": "icomoon-free:arrow-up-right2",
	});
}

export default Component;
