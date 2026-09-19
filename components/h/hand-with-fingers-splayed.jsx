import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akm_f5a5n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akm_f5a5n"/>`,
		"fallback": "fluent-emoji-high-contrast:hand-with-fingers-splayed",
	});
}

export default Component;
