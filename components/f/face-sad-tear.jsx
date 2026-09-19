import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb0_8-tpv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb0_8-tpv"/>`,
		"fallback": "fa6-solid:face-sad-tear",
	});
}

export default Component;
