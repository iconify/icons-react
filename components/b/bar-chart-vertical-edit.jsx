import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdsjwjbib.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdsjwjbib"/>`,
		"fallback": "fluent-mdl2:bar-chart-vertical-edit",
	});
}

export default Component;
