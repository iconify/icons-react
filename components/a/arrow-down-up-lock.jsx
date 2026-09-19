import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppzj34bfp.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppzj34bfp"/>`,
		"fallback": "fa6-solid:arrow-down-up-lock",
	});
}

export default Component;
