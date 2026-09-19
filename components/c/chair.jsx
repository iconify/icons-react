import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj7e9omtg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj7e9omtg"/>`,
		"fallback": "fluent-emoji-high-contrast:chair",
	});
}

export default Component;
