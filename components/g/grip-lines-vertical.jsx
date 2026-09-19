import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvdl-nkot.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvdl-nkot"/>`,
		"fallback": "fa7-solid:grip-lines-vertical",
	});
}

export default Component;
