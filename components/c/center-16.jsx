import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqw3nmqqf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqw3nmqqf"/>`,
		"fallback": "qlementine-icons:center-16",
	});
}

export default Component;
