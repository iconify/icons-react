import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/riqh2fbol.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="riqh2fbol"/>`,
		"fallback": "bpmn:gateway-complex",
	});
}

export default Component;
