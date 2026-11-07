import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejn_m3b5w.css';
import '../../css/x/x-i7oifjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejn_m3b5w"/><path class="x-i7oifjp"/>`,
		"fallback": "solar:circle-top-up-bold",
	});
}

export default Component;
