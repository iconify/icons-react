import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwsuywb8r.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwsuywb8r"/>`,
		"fallback": "fluent-mdl2:blowing-snow",
	});
}

export default Component;
