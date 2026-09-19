import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_kxo3vjf.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_kxo3vjf"/>`,
		"fallback": "bpmn:connection",
	});
}

export default Component;
