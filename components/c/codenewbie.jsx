import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy28hvb8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy28hvb8l"/>`,
		"fallback": "thesvg:codenewbie",
	});
}

export default Component;
