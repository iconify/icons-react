import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-34oac9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-34oac9y"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path>`,
		"fallback": "svg-spinners:90-ring",
	});
}

export default Component;
