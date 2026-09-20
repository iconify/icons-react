import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vshk2dbjn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vshk2dbjn"/>`,
		"fallback": "qlementine-icons:debug-16",
	});
}

export default Component;
