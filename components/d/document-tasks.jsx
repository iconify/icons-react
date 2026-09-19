import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdey06bji.css';
import '../../css/q/qrtsixoyw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdey06bji"/><path class="qrtsixoyw"/>`,
		"fallback": "carbon:document-tasks",
	});
}

export default Component;
