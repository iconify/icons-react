import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0-79bbow.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0-79bbow"/>`,
		"fallback": "fa7-regular:face-grimace",
	});
}

export default Component;
