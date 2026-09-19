import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmjl3i6pu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmjl3i6pu"/>`,
		"fallback": "fluent-emoji-high-contrast:brown-square",
	});
}

export default Component;
