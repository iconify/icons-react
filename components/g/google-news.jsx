import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h772l42ln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h772l42ln"/>`,
		"fallback": "thesvg-color:google-news",
	});
}

export default Component;
