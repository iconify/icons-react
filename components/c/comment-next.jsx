import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auke__x0h.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auke__x0h"/>`,
		"fallback": "fluent-mdl2:comment-next",
	});
}

export default Component;
