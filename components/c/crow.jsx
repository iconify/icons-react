import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7n9o0bue.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7n9o0bue"/>`,
		"fallback": "fa6-solid:crow",
	});
}

export default Component;
