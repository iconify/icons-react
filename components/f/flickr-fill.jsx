import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d51p1bo9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d51p1bo9i"/>`,
		"fallback": "ri:flickr-fill",
	});
}

export default Component;
