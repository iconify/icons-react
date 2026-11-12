import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxx9hdk7v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxx9hdk7v"/>`,
		"fallback": "selfhst:framework-dark",
	});
}

export default Component;
