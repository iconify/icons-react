import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ky-a60blb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ky-a60blb"/>`,
		"fallback": "icomoon-free:glass",
	});
}

export default Component;
