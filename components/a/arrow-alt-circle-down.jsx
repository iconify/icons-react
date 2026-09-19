import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjamiqbtl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjamiqbtl"/>`,
		"fallback": "fa7-regular:arrow-alt-circle-down",
	});
}

export default Component;
