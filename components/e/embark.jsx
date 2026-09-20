import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ws0nytbhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ws0nytbhp"/>`,
		"fallback": "thesvg-color:embark",
	});
}

export default Component;
