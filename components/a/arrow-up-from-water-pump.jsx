import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_1dsscgf.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_1dsscgf"/>`,
		"fallback": "fa7-solid:arrow-up-from-water-pump",
	});
}

export default Component;
