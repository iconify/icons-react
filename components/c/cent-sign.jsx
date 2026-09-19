import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfna8t0nb.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfna8t0nb"/>`,
		"fallback": "fa7-solid:cent-sign",
	});
}

export default Component;
