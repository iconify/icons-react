import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vipvgbcfn.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vipvgbcfn"/>`,
		"fallback": "fa6-solid:cloud-sun",
	});
}

export default Component;
