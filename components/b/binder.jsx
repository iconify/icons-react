import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j99vy2bcq.css';

const viewBox = {"width":401,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j99vy2bcq"/>`,
		"fallback": "file-icons:binder",
	});
}

export default Component;
