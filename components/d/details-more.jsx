import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u828rdhnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u828rdhnz"/>`,
		"fallback": "gg:details-more",
	});
}

export default Component;
