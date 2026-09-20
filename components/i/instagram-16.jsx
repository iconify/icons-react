import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d95zib8im.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d95zib8im"/>`,
		"fallback": "qlementine-icons:instagram-16",
	});
}

export default Component;
