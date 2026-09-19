import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq7y_cb7m.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fq7y_cb7m"/>`,
		"fallback": "fluent-mdl2:alt-text",
	});
}

export default Component;
