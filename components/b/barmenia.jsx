import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb7hj8bzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb7hj8bzq"/>`,
		"fallback": "thesvg:barmenia",
	});
}

export default Component;
