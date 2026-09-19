import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3h7__b-w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3h7__b-w"/>`,
		"fallback": "fa6-solid:face-laugh-wink",
	});
}

export default Component;
