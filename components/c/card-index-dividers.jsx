import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqh-e-b9f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqh-e-b9f"/>`,
		"fallback": "fluent-emoji-high-contrast:card-index-dividers",
	});
}

export default Component;
