import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zomq8mbve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zomq8mbve"/>`,
		"fallback": "thesvg-color:imdb",
	});
}

export default Component;
