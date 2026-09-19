import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhr271wtu.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhr271wtu"/>`,
		"fallback": "bpmn:gateway-none",
	});
}

export default Component;
