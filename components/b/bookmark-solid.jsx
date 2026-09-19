import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd8rxbb4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd8rxbb4x"/>`,
		"fallback": "basil:bookmark-solid",
	});
}

export default Component;
