import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1qm32gsj.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1qm32gsj"/>`,
		"fallback": "si-glyph:arrow-fullscreen-2",
	});
}

export default Component;
