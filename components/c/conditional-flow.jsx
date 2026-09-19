import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h855_yb2w.css';
import '../../css/v/vlrrqacry.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h855_yb2w"/><path class="vlrrqacry"/>`,
		"fallback": "bpmn:conditional-flow",
	});
}

export default Component;
