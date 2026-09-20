import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8t0y_b_x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g8t0y_b_x"/>`,
		"fallback": "qlementine-icons:inbox-16",
	});
}

export default Component;
