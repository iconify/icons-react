import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/muvkmzizo.css';

const viewBox = {"width":2000,"height":2000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="muvkmzizo"/>`,
		"fallback": "bpmn:data-object",
	});
}

export default Component;
