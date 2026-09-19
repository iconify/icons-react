import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdv6r3b5r.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdv6r3b5r"/>`,
		"fallback": "fluent-mdl2:column-vertical-section",
	});
}

export default Component;
