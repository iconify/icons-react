import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zf-m5_bmo.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zf-m5_bmo"/>`,
		"fallback": "fa6-regular:hourglass",
	});
}

export default Component;
