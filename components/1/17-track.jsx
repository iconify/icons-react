import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvn6v2bbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvn6v2bbz"/>`,
		"fallback": "cbi:17-track",
	});
}

export default Component;
