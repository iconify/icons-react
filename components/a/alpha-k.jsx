import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0c8ymouc.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0c8ymouc"/>`,
		"fallback": "memory:alpha-k",
	});
}

export default Component;
