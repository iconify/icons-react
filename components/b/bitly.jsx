import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgqj3z6yk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgqj3z6yk"/>`,
		"fallback": "thesvg-color:bitly",
	});
}

export default Component;
