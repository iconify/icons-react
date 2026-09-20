import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t58ktzpqn.css';
import '../../css/h/hai_nbocs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t58ktzpqn"/><path clip-rule="evenodd" class="hai_nbocs"/>`,
		"fallback": "qlementine-icons:instagram-fill-16",
	});
}

export default Component;
