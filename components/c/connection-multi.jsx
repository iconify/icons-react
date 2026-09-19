import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vw93qc29m.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vw93qc29m"/>`,
		"fallback": "bpmn:connection-multi",
	});
}

export default Component;
