import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjhh8zbqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjhh8zbqo"/>`,
		"fallback": "thesvg-color:ankermake",
	});
}

export default Component;
