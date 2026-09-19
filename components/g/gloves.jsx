import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv9fke9ux.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rv9fke9ux"/>`,
		"fallback": "fluent-emoji-high-contrast:gloves",
	});
}

export default Component;
