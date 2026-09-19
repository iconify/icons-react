import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oze8g3fll.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oze8g3fll"/>`,
		"fallback": "fa7-solid:file-circle-exclamation",
	});
}

export default Component;
