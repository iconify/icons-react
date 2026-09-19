import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk7pu-57w.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rk7pu-57w"/>`,
		"fallback": "fa-regular:hospital",
	});
}

export default Component;
