import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evckj06eh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evckj06eh"/>`,
		"fallback": "bi:arrow-up",
	});
}

export default Component;
