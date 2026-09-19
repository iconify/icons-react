import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7ld8jb4p.css';

const viewBox = {"width":13,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7ld8jb4p"/>`,
		"fallback": "fontisto:bookmark",
	});
}

export default Component;
