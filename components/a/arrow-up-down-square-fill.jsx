import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv6fu-bgk.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv6fu-bgk"/>`,
		"fallback": "f7:arrow-up-down-square-fill",
	});
}

export default Component;
