import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltq6thbqi.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltq6thbqi"/>`,
		"fallback": "pullo:file-question-fill",
	});
}

export default Component;
