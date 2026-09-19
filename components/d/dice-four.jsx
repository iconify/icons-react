import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntc9-ffnj.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntc9-ffnj"/>`,
		"fallback": "fa6-solid:dice-four",
	});
}

export default Component;
