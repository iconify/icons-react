import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uk1hhe5-w.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uk1hhe5-w"/>`,
		"fallback": "fluent-mdl2:arrow-up-right-mirrored-8",
	});
}

export default Component;
