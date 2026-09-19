import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyrrunb7r.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyrrunb7r"/>`,
		"fallback": "fluent-mdl2:clear-selection-mirrored",
	});
}

export default Component;
