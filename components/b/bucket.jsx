import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmshjo7qm.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmshjo7qm"/>`,
		"fallback": "fa6-solid:bucket",
	});
}

export default Component;
