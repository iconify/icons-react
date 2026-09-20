import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2zvx5bln.css';
import '../../css/b/b3h4d4bti.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2zvx5bln"/><path class="b3h4d4bti"/>`,
		"fallback": "vaadin:comments",
	});
}

export default Component;
