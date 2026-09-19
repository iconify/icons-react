import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bf_crfbom.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bf_crfbom"/>`,
		"fallback": "fluent-mdl2:bar-chart-vertical-fill",
	});
}

export default Component;
