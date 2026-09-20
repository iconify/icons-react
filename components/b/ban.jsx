import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zei6jfwox.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zei6jfwox"/>`,
		"fallback": "vaadin:ban",
	});
}

export default Component;
