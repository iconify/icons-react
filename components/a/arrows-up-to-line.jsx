import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xantwab2r.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xantwab2r"/>`,
		"fallback": "fa6-solid:arrows-up-to-line",
	});
}

export default Component;
