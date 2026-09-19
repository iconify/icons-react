import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7gkzjboz.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7gkzjboz"/>`,
		"fallback": "fluent-mdl2:download-document",
	});
}

export default Component;
