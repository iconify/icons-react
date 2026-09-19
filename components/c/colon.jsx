import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/js_s7u-5h.css';

const viewBox = {"width":77,"height":649};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="js_s7u-5h"/>`,
		"fallback": "ls:colon",
	});
}

export default Component;
