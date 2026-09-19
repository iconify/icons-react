import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9_q4iqvz.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9_q4iqvz"/>`,
		"fallback": "fa7-solid:2",
	});
}

export default Component;
