import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2to0hbkc.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2to0hbkc"/>`,
		"fallback": "fluent-mdl2:document-reply",
	});
}

export default Component;
