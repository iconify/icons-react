import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9gberbrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9gberbrd"/>`,
		"fallback": "thesvg-color:iceland",
	});
}

export default Component;
