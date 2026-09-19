import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wea8hpbgw.css';

const viewBox = {"width":512,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wea8hpbgw"/>`,
		"fallback": "zmdi:cloud-outline",
	});
}

export default Component;
