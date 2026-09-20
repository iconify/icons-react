import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clwgi5s7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clwgi5s7h"/>`,
		"fallback": "thesvg-color:decentraland",
	});
}

export default Component;
