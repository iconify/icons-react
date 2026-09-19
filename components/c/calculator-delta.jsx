import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mc7yy3rrb.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mc7yy3rrb"/>`,
		"fallback": "fluent-mdl2:calculator-delta",
	});
}

export default Component;
