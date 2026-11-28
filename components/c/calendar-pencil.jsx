import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-ndi-n9v.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-ndi-n9v"/>`,
		"fallback": "pullo:calendar-pencil",
	});
}

export default Component;
