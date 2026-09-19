import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o77mreb4u.css';
import '../../css/l/ljorwac7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o77mreb4u"/><path class="ljorwac7o"/>`,
		"fallback": "bx:bx-movie-play",
	});
}

export default Component;
