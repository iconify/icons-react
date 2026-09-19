import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfs5vejnu.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfs5vejnu"/>`,
		"fallback": "fa7-solid:0",
	});
}

export default Component;
