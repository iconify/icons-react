import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gk07qcbce.css';
import '../../css/c/cyflbfbns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gk07qcbce"/><path class="cyflbfbns"/>`,
		"fallback": "pixel:cc",
	});
}

export default Component;
