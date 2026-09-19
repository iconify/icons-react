import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lg1a5jd7n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lg1a5jd7n"/>`,
		"fallback": "fluent-emoji-high-contrast:french-fries",
	});
}

export default Component;
