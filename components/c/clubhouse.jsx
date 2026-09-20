import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba-t9briz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ba-t9briz"/>`,
		"fallback": "thesvg-color:clubhouse",
	});
}

export default Component;
