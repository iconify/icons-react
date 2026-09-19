import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utziudx1s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utziudx1s"/>`,
		"fallback": "fluent-emoji-high-contrast:divide",
	});
}

export default Component;
