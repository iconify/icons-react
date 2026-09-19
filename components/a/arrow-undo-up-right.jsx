import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/juxp6ccai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="juxp6ccai"/>`,
		"fallback": "ci:arrow-undo-up-right",
	});
}

export default Component;
