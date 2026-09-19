import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsq5e3bzz.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsq5e3bzz"/>`,
		"fallback": "fluent-mdl2:automate-flow",
	});
}

export default Component;
