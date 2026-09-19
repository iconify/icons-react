import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp8nr6zsf.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp8nr6zsf"/>`,
		"fallback": "f7:device-tablet-landscape",
	});
}

export default Component;
