import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/op10nbbyp.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="op10nbbyp"/>`,
		"fallback": "f7:arrowtriangle-right-circle-fill",
	});
}

export default Component;
