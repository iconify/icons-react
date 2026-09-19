import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9ar7ibgb.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9ar7ibgb"/>`,
		"fallback": "zmdi:email",
	});
}

export default Component;
