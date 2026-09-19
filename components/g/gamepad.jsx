import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vf700_lzj.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vf700_lzj"/>`,
		"fallback": "fa6-solid:gamepad",
	});
}

export default Component;
