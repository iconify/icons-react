import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx-eyubof.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jx-eyubof"/>`,
		"fallback": "qlementine-icons:format-italic-16",
	});
}

export default Component;
