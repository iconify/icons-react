import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn-5w0b6j.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fn-5w0b6j"/>`,
		"fallback": "fluent-mdl2:arrow-tall-up-left",
	});
}

export default Component;
