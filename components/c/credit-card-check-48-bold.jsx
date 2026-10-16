import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tob1thbir.css';
import '../../css/a/a7pqz9q8z.css';
import '../../css/y/y9mg2tbzu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tob1thbir"/><path class="a7pqz9q8z"/><path class="y9mg2tbzu"/>`,
		"fallback": "energy-icons:credit-card-check-48-bold",
	});
}

export default Component;
