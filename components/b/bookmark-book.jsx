import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/i/ibr5ixl_o.css';
import '../../css/d/do1ou9w3f.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="ibr5ixl_o"/><path class="do1ou9w3f"/></g>`,
		"fallback": "system-uicons:bookmark-book",
	});
}

export default Component;
