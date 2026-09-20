import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhevx-b8u.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhevx-b8u"/>`,
		"fallback": "memory:box-light-vertical-circle",
	});
}

export default Component;
