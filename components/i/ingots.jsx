import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khnu7pbkf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khnu7pbkf"/>`,
		"fallback": "at-icons:ingots",
	});
}

export default Component;
