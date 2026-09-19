import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtzvfs7nb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtzvfs7nb"/>`,
		"fallback": "fluent-emoji-high-contrast:factory",
	});
}

export default Component;
