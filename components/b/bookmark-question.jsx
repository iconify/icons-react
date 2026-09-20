import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxnwnf76c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxnwnf76c"/>`,
		"fallback": "tabler:bookmark-question",
	});
}

export default Component;
