import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzjb8eqmj.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzjb8eqmj"/>`,
		"fallback": "fluent-mdl2:column-vertical-section-edit",
	});
}

export default Component;
