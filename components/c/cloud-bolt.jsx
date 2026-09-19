import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jalxl4brw.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jalxl4brw"/>`,
		"fallback": "fa7-solid:cloud-bolt",
	});
}

export default Component;
