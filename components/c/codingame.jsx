import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0saldb4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0saldb4f"/>`,
		"fallback": "thesvg-color:codingame",
	});
}

export default Component;
