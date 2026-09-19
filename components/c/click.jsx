import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7_iombxl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7_iombxl"/>`,
		"fallback": "at-icons:click",
	});
}

export default Component;
