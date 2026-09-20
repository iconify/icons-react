import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc65xdn8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fc65xdn8l"/>`,
		"fallback": "thesvg:bitwig",
	});
}

export default Component;
