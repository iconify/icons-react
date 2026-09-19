import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us8jlr5kr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us8jlr5kr"/>`,
		"fallback": "grommet-icons:analytics",
	});
}

export default Component;
