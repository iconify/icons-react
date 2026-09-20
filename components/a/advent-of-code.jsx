import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_gkd6bub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_gkd6bub"/>`,
		"fallback": "thesvg-color:advent-of-code",
	});
}

export default Component;
