import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9f01_r4m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9f01_r4m"/>`,
		"fallback": "fa-regular:hand-rock",
	});
}

export default Component;
