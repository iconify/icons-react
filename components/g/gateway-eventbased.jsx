import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jf4v97bvm.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jf4v97bvm"/>`,
		"fallback": "bpmn:gateway-eventbased",
	});
}

export default Component;
