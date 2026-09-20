import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onxssd1pv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onxssd1pv"/>`,
		"fallback": "thesvg:anki",
	});
}

export default Component;
