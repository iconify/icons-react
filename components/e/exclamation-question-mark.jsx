import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt-vn2f_i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rt-vn2f_i"/>`,
		"fallback": "fluent-emoji-flat:exclamation-question-mark",
	});
}

export default Component;
