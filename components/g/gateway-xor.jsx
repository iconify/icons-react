import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5729bmtp.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5729bmtp"/>`,
		"fallback": "bpmn:gateway-xor",
	});
}

export default Component;
