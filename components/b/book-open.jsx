import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1an_yugr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1an_yugr"/>`,
		"fallback": "noviair:book-open",
	});
}

export default Component;
