import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-oj87b_t.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-oj87b_t"/>`,
		"fallback": "el:forward-alt",
	});
}

export default Component;
