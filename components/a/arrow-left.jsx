import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0t5pub1j.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0t5pub1j"/>`,
		"fallback": "fa6-solid:arrow-left",
	});
}

export default Component;
