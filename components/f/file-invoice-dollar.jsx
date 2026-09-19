import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j83cewb7j.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j83cewb7j"/>`,
		"fallback": "fa7-solid:file-invoice-dollar",
	});
}

export default Component;
