import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypsophbxa.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypsophbxa"/>`,
		"fallback": "fluent-mdl2:file-comment",
	});
}

export default Component;
