import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r74fw468h.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r74fw468h"/>`,
		"fallback": "fa7-regular:hand-scissors",
	});
}

export default Component;
