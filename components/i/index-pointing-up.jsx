import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/euzqdr04x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="euzqdr04x"/>`,
		"fallback": "fluent-emoji-high-contrast:index-pointing-up",
	});
}

export default Component;
