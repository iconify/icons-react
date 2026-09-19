import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7rpd4bve.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7rpd4bve"/>`,
		"fallback": "fa7-regular:hand-peace",
	});
}

export default Component;
