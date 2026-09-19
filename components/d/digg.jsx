import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it-zmj3wk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it-zmj3wk"/>`,
		"fallback": "fontisto:digg",
	});
}

export default Component;
