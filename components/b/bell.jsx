import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skwjpzgbt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="skwjpzgbt"/>`,
		"fallback": "icomoon-free:bell",
	});
}

export default Component;
