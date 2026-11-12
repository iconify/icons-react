import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dad-_9bln.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dad-_9bln"/>`,
		"fallback": "selfhst:imdb-light",
	});
}

export default Component;
