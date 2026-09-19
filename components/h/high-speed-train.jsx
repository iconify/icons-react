import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jz6gwxb-r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jz6gwxb-r"/>`,
		"fallback": "fluent-emoji-high-contrast:high-speed-train",
	});
}

export default Component;
