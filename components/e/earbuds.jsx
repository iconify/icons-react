import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmju0pblq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmju0pblq"/>`,
		"fallback": "noviair-light:earbuds",
	});
}

export default Component;
