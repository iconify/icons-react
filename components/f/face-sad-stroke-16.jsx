import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo5a97nhk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bo5a97nhk"/>`,
		"fallback": "garden:face-sad-stroke-16",
	});
}

export default Component;
