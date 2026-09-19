import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg-14ob0u.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eg-14ob0u"/>`,
		"fallback": "fa7-solid:hand-holding-droplet",
	});
}

export default Component;
