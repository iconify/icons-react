import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1xb_obhf.css';

const viewBox = {"width":431,"height":953};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1xb_obhf"/>`,
		"fallback": "ls:dollar",
	});
}

export default Component;
