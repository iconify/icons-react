import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfx04gw8w.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfx04gw8w"/>`,
		"fallback": "fa6-solid:car-burst",
	});
}

export default Component;
