import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dudglib1r.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dudglib1r"/>`,
		"fallback": "fa6-solid:bridge-water",
	});
}

export default Component;
