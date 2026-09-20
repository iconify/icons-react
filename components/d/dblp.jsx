import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rupcwabge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rupcwabge"/>`,
		"fallback": "thesvg-color:dblp",
	});
}

export default Component;
