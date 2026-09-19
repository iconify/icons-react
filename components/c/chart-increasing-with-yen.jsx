import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynna6ub8c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynna6ub8c"/>`,
		"fallback": "fluent-emoji-high-contrast:chart-increasing-with-yen",
	});
}

export default Component;
