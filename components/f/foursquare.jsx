import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjgc9gb-q.css';

const viewBox = {"width":17,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjgc9gb-q"/>`,
		"fallback": "fontisto:foursquare",
	});
}

export default Component;
