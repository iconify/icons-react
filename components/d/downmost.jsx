import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo35-tb6o.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fo35-tb6o"/>`,
		"fallback": "picon:downmost",
	});
}

export default Component;
