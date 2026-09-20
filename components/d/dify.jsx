import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8yd1s8eo.css';
import '../../css/o/o0bjgebdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8yd1s8eo"/><path class="o0bjgebdu"/>`,
		"fallback": "thesvg-color:dify",
	});
}

export default Component;
