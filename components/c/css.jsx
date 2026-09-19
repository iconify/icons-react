import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_8fwfbeg.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_8fwfbeg"/>`,
		"fallback": "el:css",
	});
}

export default Component;
