import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1bkftz1s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1bkftz1s"/>`,
		"fallback": "icomoon-free:dice",
	});
}

export default Component;
