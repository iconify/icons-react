import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahz1tzslr.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahz1tzslr"/>`,
		"fallback": "fluent-mdl2:fast-forward-one-x",
	});
}

export default Component;
