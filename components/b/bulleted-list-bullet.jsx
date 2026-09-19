import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0t74x1cb.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0t74x1cb"/>`,
		"fallback": "fluent-mdl2:bulleted-list-bullet",
	});
}

export default Component;
