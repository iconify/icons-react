import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcy60_bxj.css';
import '../../css/d/dw8a25bsl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcy60_bxj"/><path clip-rule="evenodd" class="dw8a25bsl"/>`,
		"fallback": "qlementine-icons:book-16",
	});
}

export default Component;
