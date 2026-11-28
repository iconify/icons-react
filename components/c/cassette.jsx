import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4hegq5pi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4hegq5pi"/>`,
		"fallback": "noviair:cassette",
	});
}

export default Component;
