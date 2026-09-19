import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/due4_cbqv.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="due4_cbqv"/>`,
		"fallback": "fluent-mdl2:dock-left-mirrored",
	});
}

export default Component;
