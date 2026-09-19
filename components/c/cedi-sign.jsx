import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/waq7f_0of.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="waq7f_0of"/>`,
		"fallback": "fa6-solid:cedi-sign",
	});
}

export default Component;
