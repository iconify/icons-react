import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqb2d8bjl.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqb2d8bjl"/>`,
		"fallback": "fluent-mdl2:caret-right-8",
	});
}

export default Component;
