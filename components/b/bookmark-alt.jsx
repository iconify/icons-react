import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eln8b-54w.css';

const viewBox = {"width":13,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eln8b-54w"/>`,
		"fallback": "fontisto:bookmark-alt",
	});
}

export default Component;
