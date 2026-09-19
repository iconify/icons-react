import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wuq6-10mn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wuq6-10mn"/>`,
		"fallback": "fa-regular:arrow-alt-circle-right",
	});
}

export default Component;
