import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv5ugxbao.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv5ugxbao"/>`,
		"fallback": "ion:beaker-outline",
	});
}

export default Component;
