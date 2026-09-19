import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkgs2j2gi.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qkgs2j2gi"/>`,
		"fallback": "fluent-mdl2:feedback-request-solid",
	});
}

export default Component;
