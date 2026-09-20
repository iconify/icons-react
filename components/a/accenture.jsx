import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-e6l2b5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-e6l2b5j"/>`,
		"fallback": "thesvg-color:accenture",
	});
}

export default Component;
