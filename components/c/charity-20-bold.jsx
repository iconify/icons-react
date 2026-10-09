import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur5l4w8hg.css';
import '../../css/n/nqiq-nbfi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ur5l4w8hg"/><path class="nqiq-nbfi"/>`,
		"fallback": "energy-icons:charity-20-bold",
	});
}

export default Component;
