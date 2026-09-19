import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypm8ffb1n.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypm8ffb1n"/>`,
		"fallback": "fa6-solid:d",
	});
}

export default Component;
