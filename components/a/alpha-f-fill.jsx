import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbxlq0bic.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbxlq0bic"/>`,
		"fallback": "memory:alpha-f-fill",
	});
}

export default Component;
