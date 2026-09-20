import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8x5s4moj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8x5s4moj"/>`,
		"fallback": "thesvg-color:httpie",
	});
}

export default Component;
