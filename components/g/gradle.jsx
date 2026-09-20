import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpqlw8uhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpqlw8uhg"/>`,
		"fallback": "thesvg:gradle",
	});
}

export default Component;
