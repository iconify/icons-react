import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqjhhacny.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqjhhacny"/>`,
		"fallback": "fa:arrow-circle-o-left",
	});
}

export default Component;
