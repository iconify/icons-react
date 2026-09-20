import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oex_pe6-c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oex_pe6-c"/>`,
		"fallback": "qlementine-icons:format-strikethrough-16",
	});
}

export default Component;
