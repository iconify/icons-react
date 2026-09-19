import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tujzozb_y.css';

const viewBox = {"width":2048,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tujzozb_y"/>`,
		"fallback": "fa:cab",
	});
}

export default Component;
