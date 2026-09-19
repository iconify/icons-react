import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/beuhm91yh.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="beuhm91yh"/>`,
		"fallback": "fluent-mdl2:drill-through",
	});
}

export default Component;
