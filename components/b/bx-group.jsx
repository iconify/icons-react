import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0mfz3j4c.css';
import '../../css/u/uvedyyb9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0mfz3j4c"/><path class="uvedyyb9a"/>`,
		"fallback": "bx:bx-group",
	});
}

export default Component;
