import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqv_ljb2n.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqv_ljb2n"/>`,
		"fallback": "fa-solid:hourglass",
	});
}

export default Component;
