import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu_4dpbmi.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gu_4dpbmi"/>`,
		"fallback": "el:bold",
	});
}

export default Component;
